import {FC} from 'react';
import {TextVariant} from './styled';
import {ElementText} from '../../types';

export const Text: FC<ElementText> = ({text}) => {
  return <TextVariant>{text}</TextVariant>;
};
