import { ReactNode } from 'react';

import * as S from './styles';

type ContentAuthProps = {
  children: ReactNode;
};

export function ContentAuth({ children }: ContentAuthProps) {
  return <S.Container>{children}</S.Container>;
}
