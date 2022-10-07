import { useState } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { ITicket } from '../../../models/ticket';
import { deleteTicket } from '../../../services/routes/Ticket.service';
import { ModalEditTicket } from '../../Modal/ModalEditTicket';

import { Container } from './styles';

interface TicketProps {
  ticket: ITicket;
  isCreated?: boolean;
  loadData: () => void;
}

export function Ticket({ ticket, isCreated, loadData }: TicketProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  async function handleDeleteTicket() {
    try {
      const response = window.confirm(
        'Tem certeza que deseja excluir esse ticket?',
      );

      if (!response) {
        return;
      }

      await deleteTicket(ticket.id);

      toast.success('Ticket deletado com sucesso!');

      loadData();
    } catch (err: any) {
      toast.error(err.reponse.data.message);
    }
  }

  return (
    <>
      {isModalOpen && (
        <ModalEditTicket
          ticket={ticket}
          isModalOpen={isModalOpen}
          onCloseModal={() => setIsModalOpen(false)}
          loadData={loadData}
        />
      )}
      {isCreated ? (
        <Container>
          <strong>Titulo: </strong>
          <p>{ticket.title}</p>

          <strong>Enviado para: </strong>
          <p>{ticket.toUser.name}</p>

          <strong>Endereço Pedido: </strong>
          <p>
            {' '}
            {ticket?.address?.number}, {ticket?.address?.street},{' '}
            {ticket?.address?.neighborhood}, {ticket?.address?.city},{' '}
            {ticket?.address?.cep} - {ticket?.address?.state}
          </p>

          <strong>Local: </strong>
          <p>{ticket?.place?.name}</p>

          <strong>Status: </strong>
          <p>{ticket.status}</p>

          <div>
            <FaTrash onClick={handleDeleteTicket} />
          </div>
        </Container>
      ) : (
        <Container>
          <strong>Titulo: </strong>
          <p>{ticket.title}</p>

          <strong>Recebido de: </strong>
          <p>{ticket?.fromUser?.name}</p>

          <strong>Endereço Pedido: </strong>
          <p>
            {' '}
            {ticket?.address?.number}, {ticket?.address?.street},{' '}
            {ticket?.address?.neighborhood}, {ticket?.address?.city},{' '}
            {ticket?.address?.cep} - {ticket?.address?.state}
          </p>

          <strong>Local: </strong>
          <p>{ticket?.place?.name}</p>

          <strong>Status: </strong>
          <p>{ticket.status}</p>

          {ticket.status !== 'CONCLUIDO' && (
            <div>
              <FaPen onClick={() => setIsModalOpen(true)} />
            </div>
          )}
        </Container>
      )}
    </>
  );
}
