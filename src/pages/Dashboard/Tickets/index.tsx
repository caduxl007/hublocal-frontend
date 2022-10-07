import {
  Header,
  ContentCards,
  TitleContent,
  ContainerAuth,
  ContentAuth,
  Ticket,
  NotFoundData,
} from '../../../components';

import { useFetch } from '../../../hooks/useFetch';
import { ITicket } from '../../../models/ticket';

type FetchTickets = {
  created: ITicket[];
  received: ITicket[];
};

export function Tickets() {
  const { data, setIsFetch } = useFetch<FetchTickets>('/tickets');

  function loadData() {
    setIsFetch(true);
  }

  return (
    <>
      <ContainerAuth>
        <Header title="Tickets" />

        <ContentAuth>
          <TitleContent>
            <h2>Tickets Criado</h2>
          </TitleContent>

          <ContentCards>
            {data?.created?.length ? (
              data?.created?.map((data) => (
                <Ticket
                  key={data.id}
                  ticket={data}
                  isCreated
                  loadData={loadData}
                />
              ))
            ) : (
              <NotFoundData />
            )}
          </ContentCards>
        </ContentAuth>

        <ContentAuth>
          <TitleContent>
            <h2>Tickets Recebido</h2>
          </TitleContent>

          <ContentCards>
            {data?.received.length ? (
              data?.received?.map((data) => (
                <Ticket key={data.id} ticket={data} loadData={loadData} />
              ))
            ) : (
              <NotFoundData />
            )}
          </ContentCards>
        </ContentAuth>
      </ContainerAuth>
    </>
  );
}
