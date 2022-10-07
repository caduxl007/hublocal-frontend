import { useNavigate } from 'react-router-dom';
import { FaPen, FaTrash } from 'react-icons/fa';
import { ICompany } from '../../../../../models/company';
import { TitleContent } from '../../../../../components/TitleContent';

import * as S from './styles';
import { toast } from 'react-toastify';
import { deleteCompany } from '../../../../../services/routes/Company.service';
import { formattedCNPJ } from '../../../../../utils/formattedCNPJ';

type InfoCompanyProps = {
  company: ICompany;
  onOpenModal: () => void;
};

export function InfoCompany({ company, onOpenModal }: InfoCompanyProps) {
  const navigate = useNavigate();

  async function handleDeleteCompany() {
    try {
      const response = window.confirm(
        'Tem certeza que deseja excluir essa empresa?',
      );

      if (!response) {
        return;
      }

      await deleteCompany(company.id);

      navigate('/dashboard');

      toast.success('Empresa deletada com sucesso!');
    } catch (err: any) {
      toast.error(err.reponse.data.message);
    }
  }

  return (
    <>
      <S.Container>
        <div>
          <TitleContent>
            <h2>
              {company?.name} ({formattedCNPJ(company.cnpj)})
            </h2>
          </TitleContent>
          <div>
            <FaTrash onClick={handleDeleteCompany} />
            <FaPen onClick={onOpenModal} />
          </div>
        </div>

        <p>{company.description}</p>
      </S.Container>
    </>
  );
}
