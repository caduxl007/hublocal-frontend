import { useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { getValidationErrors } from '../../../utils/getValidationErrors';
import {
  Button,
  ContainerAuth,
  ContentAuth,
  FormResponsible,
  Header,
} from '../../../components';
import { Input } from '../../../components/Input';
import { toast } from 'react-toastify';
import { ICompany, ICreateCompanyFormData } from '../../../models/company';
import { TitleContent } from '../../../components/TitleContent';
import { schemaCreateCompany } from '../../../utils/yup/schemas-validations';
import { createCompany } from '../../../services/routes/Company.service';

export function CreateCompany() {
  const formRef = useRef<FormHandles>(null);
  const [company, setCompany] = useState({} as ICompany);

  async function handleSubmit(data: ICreateCompanyFormData) {
    try {
      formRef.current?.setErrors({});

      const schema = schemaCreateCompany;

      await schema.validate(data, {
        abortEarly: false,
      });

      const response = await createCompany(data);
      setCompany(response.data);

      toast.success('Empresa criada com sucesso! Agora você pode adicionar um responsável.');
    } catch (err: any) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
        return;
      }

      toast.error(err?.response?.data?.message);
    }
  }

  return (
    <ContainerAuth>
      <Header title="Criar Empresa" />

      <ContentAuth>
        <TitleContent>Adicionar Empresa</TitleContent>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <div>
            <Input name="name" placeholder="Nome" disabled={!!company.id} />
            <Input
              name="cnpj"
              placeholder="CNPJ(Só numeros)"
              disabled={!!company.id}
              type="number"
            />
          </div>

          <div>
            <Input
              name="description"
              placeholder="Descrição"
              disabled={!!company.id}
            />
          </div>
          {!company.id && <Button type="submit">Salvar</Button>}
        </Form>
      </ContentAuth>

      {!!company.id && (
        <FormResponsible companyId={company.id} placeId={null} />
      )}
    </ContainerAuth>
  );
}
