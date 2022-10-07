import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ContainerAuth,
  ContentAuth,
  ContentCardsResponsibles,
  Header,
  ModalEditPlace,
} from '../../../components';
import { useFetch } from '../../../hooks/useFetch';
import { IPlace } from '../../../models/place';
import { InfoPlace } from './components/InfoPlace';

type Params = {
  idPlace: string;
};

export function PlacePage() {
  const { idPlace } = useParams() as Params;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const {
    data: place,
    error,
    setIsFetch,
  } = useFetch<IPlace>(`/places/${idPlace}`);

  if (error) {
    navigate(-1);
  }

  function reloadData() {
    setIsFetch(true);
  }

  return (
    <>
      {isModalOpen && !!place?.id && (
        <ModalEditPlace
          isModalOpen={isModalOpen}
          onCloseModal={() => setIsModalOpen(false)}
          reloadData={reloadData}
          place={place}
        />
      )}

      <ContainerAuth>
        <Header title={place?.name || ''} />

        {!!place?.id && (
          <>
            <ContentAuth>
              <InfoPlace
                place={place}
                onModalOpen={() => setIsModalOpen(true)}
              />
            </ContentAuth>
            <ContentCardsResponsibles responsibles={place.responsibles} />
          </>
        )}
      </ContainerAuth>
    </>
  );
}
