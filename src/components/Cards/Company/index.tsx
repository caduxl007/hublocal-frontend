import { FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ICompany } from '../../../models/company';
import { formattedCNPJ } from '../../../utils/formattedCNPJ';

import { Container } from './styles';

interface CompanyProps {
  company: ICompany;
}

export function Company({ company }: CompanyProps) {
  const navigate = useNavigate();

  return (
    <Container>
      <strong>Nome: </strong>
      <p>{company.name}</p>

      <strong>CNPJ: </strong>
      <p>{formattedCNPJ(company.cnpj)}</p>

      <strong>Descrição: </strong>
      <p>{company.description}</p>

      <div>
        <FaEye onClick={() => navigate(`/company/${company.id}`)} />
      </div>
    </Container>
  );
}
