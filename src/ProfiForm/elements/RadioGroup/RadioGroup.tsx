import {FC} from 'react';
import {ElementRadioGroup} from '../../types';
import {Container, ItemWrapper, Input, DecorativeInput, Label} from './styled';
import {useFormContext} from 'react-hook-form';

export const RadioGroup: FC<ElementRadioGroup> = ({id, items, activeId}) => {
  const {register} = useFormContext();

  return (
    <Container>
      {items.map(item => {
        return (
          <ItemWrapper key={item.id}>
            <Input
              id={item.id}
              type="radio"
              value={item.id}
              {...register(id)}
            />
            <Label htmlFor={item.id}>
              <DecorativeInput />
              {item.value}
            </Label>
          </ItemWrapper>
        );
      })}
    </Container>
  );
};
