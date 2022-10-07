import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Button,
  ContainerAuth,
  ContentAuth,
  ContentCards,
  ContentCardsResponsibles,
  Header,
  ModalEditCompany,
  NotFoundData,
  Place,
  TitleContent,
} from '../../../components';
import { useFetch } from '../../../hooks/useFetch';
import { ICompany } from '../../../models/company';
import { InfoCompany } from './components/InfoCompany';

import * as S from './styles';

type Params = {
  idCompany: string;
};

export function CompanyPage() {
  const { idCompany } = useParams() as Params;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const {
    data: company,
    error,
    setIsFetch,
  } = useFetch<ICompany>(`/companies/${idCompany}`);

  function reloadData() {
    setIsFetch(true);
  }

  if (error) {
    navigate(-1);
  }

  return (
    <>
      {isModalOpen && company && (
        <ModalEditCompany
          isModalOpen={isModalOpen}
          onCloseModal={() => setIsModalOpen(false)}
          reloadData={reloadData}
          company={company}
        />
      )}

      <ContainerAuth>
        {company?.id && (
          <>
            <Header title={company.name} />
            <ContentAuth>
              <InfoCompany
                company={company}
                onOpenModal={() => setIsModalOpen(true)}
              />
            </ContentAuth>

            <ContentAuth>
              <S.HeaderContent>
                <TitleContent>Locais</TitleContent>
                <div>
                  <Button
                    onClick={() => navigate(`/create-place/${idCompany}`)}
                  >
                    Adicionar Local
                  </Button>
                </div>
              </S.HeaderContent>

              <ContentCards>
                {company?.places.length ? (
                  company.places?.map((data) => (
                    <Place key={data.id} place={data} />
                  ))
                ) : (
                  <NotFoundData />
                )}
              </ContentCards>
            </ContentAuth>

            <ContentCardsResponsibles responsibles={company.responsibles} />
          </>
        )}
      </ContainerAuth>
    </>
  );
}
