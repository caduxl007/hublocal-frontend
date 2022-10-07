import { Modal, Box } from '@mui/material';
import { ReactNode } from 'react';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 500,
  width: '100%',
  background: '#0a111c',
  border: '1px solid #ccc',
  borderRadius: '10px',
  p: 2,
};

type ModalProps = {
  children: ReactNode;
  isModalOpen: boolean;
  onCloseModal: () => void;
};

export function ModalContent({
  children,
  isModalOpen,
  onCloseModal,
}: ModalProps) {
  return (
    <Modal
      open={isModalOpen}
      onClose={onCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        margin: '1.5rem',
      }}
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
}
