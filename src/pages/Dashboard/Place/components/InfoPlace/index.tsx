import { useNavigate } from 'react-router-dom';
import { FaPen, FaTrash } from 'react-icons/fa';
import { TitleContent } from '../../../../../components/TitleContent';

import * as S from './styles';
import { toast } from 'react-toastify';
import { IPlace } from '../../../../../models/place';
import { deletePlace } from '../../../../../services/routes/Place.service';

type InfoPlaceProps = {
  place: IPlace;
  onModalOpen: () => void;
};

export function InfoPlace({ place, onModalOpen }: InfoPlaceProps) {
  const navigate = useNavigate();

  async function handleDeletePlace() {
    try {
      const response = window.confirm(
        'Tem certeza que deseja excluir esse local?',
      );

      if (!response) {
        return;
      }

      await deletePlace(place.id);

      toast.success('Local deletado com sucesso!');

      navigate(-1);
    } catch (err: any) {
      toast.error(err?.reponse?.data?.message);
    }
  }

  return (
    <>
      <S.Container>
        <div>
          <TitleContent>
            <h2>
              {place?.company?.name} - {place.name}
            </h2>
          </TitleContent>
          <div>
            <FaTrash onClick={handleDeletePlace} />
            <FaPen onClick={onModalOpen} />
          </div>
        </div>

        <p>
          <strong>Endereço: </strong>
          {place?.address?.number}, {place?.address?.street},{' '}
          {place?.address?.neighborhood}, {place?.address?.city},{' '}
          {place?.address?.cep} - {place?.address?.state}
        </p>
      </S.Container>
    </>
  );
}
