import { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export function Input({ name, placeholder, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <S.Container isError={!!error}>
      <span>{placeholder}</span>
      <input
        name={name}
        placeholder={placeholder}
        {...rest}
        defaultValue={defaultValue}
        ref={inputRef}
      />
      {error && <p>{error}</p>}
    </S.Container>
  );
}
