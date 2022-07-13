import {FC} from 'react';
import {Text, Input, Row, RadioGroup} from '../elements';
import {ElementVariant, ElementType} from '../types';

export type ElementProps = {
  element: ElementVariant;
};

export const Element: FC<ElementProps> = ({element}) => {
  switch (element.type) {
    case ElementType.input:
      return <Input {...element} />;
    case ElementType.text:
      return <Text {...element} />;
    case ElementType.radioGroup:
      return <RadioGroup {...element} />;
    case ElementType.row:
      return <Row {...element} />;
    default:
      return null;
  }
};
