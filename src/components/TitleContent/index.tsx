import { Typography } from '@mui/material';
import { ReactNode } from 'react';

type TitleContentProps = {
  children: ReactNode;
};

export function TitleContent({ children }: TitleContentProps) {
  return (
    <Typography
      sx={{
        lineHeight: '2rem',
        color: '#fff',
        fontWeight: 600,
        fontSize: '1.5rem',
        fontFamily: 'Poppins'
      }}
    >
      {children}
    </Typography>
  );
}
