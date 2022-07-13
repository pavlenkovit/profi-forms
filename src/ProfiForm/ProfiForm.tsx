import {Element} from './Element';
import React, {useEffect, useState} from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import {Form, Title, Elements, Button, Footer} from './styled';
import {ElementVariant} from './types';

type Button = {
  type: 'secondary' | 'primary';
  text: string;
  stepId: string;
};

type FormData = {
  title: string;
  elements: ElementVariant[];
  navigations?: Button[];
};

export const ProfiForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<FormData | null>(null);
  const form = useForm();

  const getData = (stepId: string | null) => {
    setIsLoading(true);
    fetch('/api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        stepId: stepId,
        values: form.getValues(),
      }),
    })
      .then(response => response.json())
      .then(data => setData(data))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getData(null);
  }, []);

  if (isLoading) {
    return <div>Lading...</div>;
  }

  if (!data) {
    return <div>Нет данных</div>;
  }

  return (
    <FormProvider {...form}>
      <Form>
        <Title>{data.title}</Title>
        <Elements>
          {data.elements.map(element => (
            <Element key={element.id} element={element} />
          ))}
        </Elements>
        {data.navigations && (
          <Footer>
            {data.navigations.map((button, index) => {
              return (
                <Button
                  key={index}
                  dataType={button.type}
                  onClick={() => getData(button.stepId)}
                >
                  {button.text}
                </Button>
              );
            })}
          </Footer>
        )}
      </Form>
    </FormProvider>
  );
};
