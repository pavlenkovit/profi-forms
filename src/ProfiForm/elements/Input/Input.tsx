import {FC} from 'react';
import {InputStyled} from './styled';
import {ElementInput} from '../../types';
import {useFormContext} from 'react-hook-form';

export const Input: FC<ElementInput> = ({placeholder, value, id}) => {
  const {register} = useFormContext();
  return <InputStyled placeholder={placeholder} {...register(id, {value})} />;
};
