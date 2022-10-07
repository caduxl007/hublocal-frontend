import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { ModalContent } from '..';
import { ICompany, ICreateCompanyFormData } from '../../../models/company';
import { editCompany } from '../../../services/routes/Company.service';
import { getValidationErrors } from '../../../utils/getValidationErrors';
import { schemaCreateCompany } from '../../../utils/yup/schemas-validations';
import { Button } from '../../Button';
import { Input } from '../../Input';
import { ContentAuth } from '../../templates/ContentAuth';
import { TitleContent } from '../../TitleContent';

type ModalEditCompanyProps = {
  company: ICompany;
  isModalOpen: boolean;
  onCloseModal: () => void;
  reloadData: () => void;
};

export function ModalEditCompany({
  company,
  isModalOpen,
  onCloseModal,
  reloadData,
}: ModalEditCompanyProps) {
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: ICreateCompanyFormData) {
    try {
      formRef.current?.setErrors({});

      const schema = schemaCreateCompany;

      await schema.validate(data, {
        abortEarly: false,
      });

      await editCompany(company.id, data);

      onCloseModal();
      toast.success('Empresa editada com sucesso!');

      reloadData();
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
    <ModalContent isModalOpen={isModalOpen} onCloseModal={onCloseModal}>
      <ContentAuth>
        <TitleContent>Atualizar Empresa</TitleContent>

        <Form
          initialData={{ ...company }}
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <div>
            <Input name="name" placeholder="Nome" />
            <Input name="cnpj" placeholder="CNPJ" />
          </div>

          <div>
            <Input name="description" placeholder="Descrição" />
          </div>
          <Button type="submit">Atualizar</Button>
        </Form>
      </ContentAuth>
    </ModalContent>
  );
}
