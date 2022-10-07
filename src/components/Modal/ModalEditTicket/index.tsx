import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { ModalContent } from '..';
import { ITicket } from '../../../models/ticket';
import api from '../../../services/api';
import { editTicket } from '../../../services/routes/Ticket.service';
import { getValidationErrors } from '../../../utils/getValidationErrors';
import { Button } from '../../Button';
import { ContentAuth } from '../../templates/ContentAuth';
import { TitleContent } from '../../TitleContent';

type ModalEditTicketProps = {
  ticket: ITicket;
  isModalOpen: boolean;
  onCloseModal: () => void;
  loadData: () => void;
};

const styleTypograph = {
  fontFamily: 'Poppins',
  fontSize: '1.6rem',
};

export function ModalEditTicket({
  ticket,
  isModalOpen,
  onCloseModal,
  loadData,
}: ModalEditTicketProps) {
  const formRef = useRef<FormHandles>(null);
  const [status, setStatus] = useState<string>(ticket.status);

  async function handleSubmit() {
    try {
      await editTicket(ticket.id, status);

      onCloseModal();
      toast.success('Ticket atualizado com sucesso!');
      loadData();
    } catch (err: any) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
        return;
      }

      toast.error(err?.response?.data?.message);
    }
  }

  return (
    <ModalContent isModalOpen={isModalOpen} onCloseModal={onCloseModal}>
      <ContentAuth>
        <TitleContent>Atualizar Ticket : {ticket.title}</TitleContent>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue={ticket.status}
              onChange={({ target }) => setStatus(String(target.value))}
              name="radio-buttons-group"
              sx={{
                color: '#fff',
              }}
            >
              <FormControlLabel
                value="PENDENTE"
                control={<Radio sx={{ color: '#fff' }} />}
                label={<Typography sx={styleTypograph}>Pendente</Typography>}
              />
              <FormControlLabel
                value="PROGRESSO"
                control={<Radio sx={{ color: '#fff', fontSize: 28 }} />}
                label={<Typography sx={styleTypograph}>Progresso</Typography>}
              />
              <FormControlLabel
                value="CONCLUIDO"
                control={<Radio sx={{ color: '#fff' }} />}
                label={<Typography sx={styleTypograph}>Concluído</Typography>}
              />
            </RadioGroup>
          </FormControl>
          <Button type="submit">Atualizar</Button>
        </Form>
      </ContentAuth>
    </ModalContent>
  );
}
