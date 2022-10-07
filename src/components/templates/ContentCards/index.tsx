import { ReactNode } from 'react';
import { Box } from '@mui/material';

type ContentCards = {
  children: ReactNode;
};

export function ContentCards({ children }: ContentCards) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        marginTop: '3rem',
      }}
      maxWidth="lg"
    >
      {children}
    </Box>
  );
}
