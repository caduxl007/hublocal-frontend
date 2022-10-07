import { Container } from '@mui/material';
import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

export function ContainerAuth({ children }: ContainerProps) {
  return (
    <Container
      sx={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0.7rem 1.4rem',
      }}
    >
      {children}
    </Container>
  );
}
