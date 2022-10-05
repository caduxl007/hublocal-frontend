import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
}

export function Button({ children, isLoading = false, ...rest }: ButtonProps) {
  return <S.Container {...rest}>{isLoading ? '...' : children}</S.Container>;
}
