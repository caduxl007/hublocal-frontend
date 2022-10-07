import { useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { toast } from 'react-toastify';
import { ICreateResponsibleFormData } from '../../models/responsible';
import api from '../../services/api';
import { getValidationErrors } from '../../utils/getValidationErrors';
import { Input } from '../Input';
import { Button } from '../Button';
import { useFetchCep } from '../../hooks/useFetchCep';
import { ContentAuth } from '../templates/ContentAuth';
import { TitleContent } from '../TitleContent';
import { schemaCreateResponsible } from '../../utils/yup/schemas-validations';
import { createResponsible } from '../../services/routes/Responsible.service';

type FormResponsible = {
  companyId: null | string;
  placeId: null | string;
};

export function FormResponsible(props: FormResponsible) {
  const [cep, setCep] = useState('');
  const { address } = useFetchCep(cep);
  const [isMain, setIsMain] = useState(false);
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: ICreateResponsibleFormData) {
    try {
      formRef.current?.setErrors({});

      const schema = schemaCreateResponsible;

      await schema.validate(data, {
        abortEarly: false,
      });

      await createResponsible({
        ...data,
        ...props,
        number: +data.number,
        isMain,
      });

      setIsMain(false);
      formRef.current?.reset();

      toast.success('Responsavel criado com sucesso');
    } catch (err: any) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
        return;
      }

      toast.error(err.response.data.message);
    }
  }

  return (
    <ContentAuth>
      <TitleContent>Adicionar Responsavel</TitleContent>
      <Form
        initialData={{
          ...address,
        }}
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <div>
          <Input name="name" placeholder="Nome" />
          <Input name="telephone" placeholder="Telefone" />
        </div>

        <div>
          <Input
            name="cep"
            placeholder="CEP"
            onChange={({ target }) => setCep(target.value)}
          />
          <Input name="city" placeholder="Cidade" />
        </div>

        <div>
          <Input name="state" placeholder="Estado" />
          <Input name="neighborhood" placeholder="Bairro" />
        </div>

        <div>
          <Input name="street" placeholder="Rua" />
          <Input type="number" name="number" placeholder="Número" />
        </div>

        <div>
          <Input name="complement" placeholder="Complemento" />
          <Input
            name="isMain"
            defaultChecked={isMain}
            placeholder="Responsavel?"
            type="checkbox"
            onChange={() => setIsMain(!isMain)}
          />
        </div>

        <Button type="submit">Salvar</Button>
      </Form>
    </ContentAuth>
  );
}
