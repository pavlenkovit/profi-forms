import {FC} from 'react';
import {ElementRow} from '../../types';
import {Wrapper} from './styled';
import {Element} from '../../Element';

export const Row: FC<ElementRow> = ({element}) => {
  return (
    <Wrapper>
      <Element element={element} />
    </Wrapper>
  );
};
