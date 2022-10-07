import { FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { IPlace } from '../../../models/place';

import { Container } from './styles';

interface PlaceProps {
  place: IPlace;
}

export function Place({ place }: PlaceProps) {
  const navigate = useNavigate();

  return (
    <Container>
      <strong>Nome: </strong>
      <p>{place.name}</p>

      <div>
        <FaEye onClick={() => navigate(`/place/${place.id}`)} />
      </div>
    </Container>
  );
}
