import { useNavigate } from 'react-router-dom';
import {
  Button,
  Header,
  Company,
  ContentCards,
  TitleContent,
  ContainerAuth,
  NotFoundData,
} from '../../components';
import { ICompany } from '../../models/company';
import { Box } from '@mui/material';
import { useFetch } from '../../hooks/useFetch';

import * as S from './styles';

export function Dashboard() {
  const navigate = useNavigate();
  const { data: companies } = useFetch<ICompany[]>('/companies');

  return (
    <>
      <ContainerAuth>
        <Header title="Dashboard" />

        <Box
          sx={{
            marginTop: '5rem',
          }}
        >
          <S.HeaderContent>
            <TitleContent>
              <h2>Empresas</h2>
            </TitleContent>
            <div>
              <Button onClick={() => navigate('/create-company')}>
                Adicionar Empresa
              </Button>
            </div>
          </S.HeaderContent>

          <ContentCards>
            {!!companies?.length ? (
              companies?.map((data) => <Company key={data.id} company={data} />)
            ) : (
              <NotFoundData />
            )}
          </ContentCards>
        </Box>
      </ContainerAuth>
    </>
  );
}
