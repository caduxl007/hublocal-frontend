import { IResponsible } from '../../../models/responsible';

import { Container } from './styles';

interface ResponsibleProps {
  responsible: IResponsible;
}

export function Responsible({ responsible }: ResponsibleProps) {
  return (
    <Container>
      <strong>Nome: </strong>
      <p>{responsible.name}</p>

      <strong>Telefone: </strong>
      <p>{responsible.telephone}</p>

      <strong>Responsável Principal: </strong>
      <p>{responsible.isMain ? 'Sim' : 'Não'}</p>
    </Container>
  );
}
