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
  TitleContent,
} from '../../../components';
import { Input } from '../../../components/Input';
import api from '../../../services/api';
import { toast } from 'react-toastify';
import { ICompany } from '../../../models/company';
import { useFetch } from '../../../hooks/useFetch';
import { useNavigate, useParams } from 'react-router-dom';
import { ICreatePlaceFormData, IPlace } from '../../../models/place';
import { useFetchCep } from '../../../hooks/useFetchCep';
import { schemaCreatePlace } from '../../../utils/yup/schemas-validations';
import { createPlace } from '../../../services/routes/Place.service';

type Params = {
  idCompany: string;
};

export function CreatePlace() {
  const navigate = useNavigate();
  const { idCompany } = useParams() as Params;
  const [cep, setCep] = useState('');
  const formRef = useRef<FormHandles>(null);
  const [place, setPlace] = useState({} as IPlace);

  const { address } = useFetchCep(cep);

  const { error } = useFetch<ICompany>(`/companies/${idCompany}`);

  if (error) {
    navigate(-1);
  }

  async function handleSubmit(data: ICreatePlaceFormData) {
    try {
      formRef.current?.setErrors({});

      const schema = schemaCreatePlace;

      await schema.validate(data, {
        abortEarly: false,
      });

      const response = await createPlace(idCompany, data);

      setPlace(response.data);

      toast.success(
        'Local criado com sucesso! Agora você pode adicionar um responsável.',
      );
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
      <Header title="Criar Local" />

      <ContentAuth>
        <TitleContent>Adicionar Local</TitleContent>
        <Form
          initialData={{
            ...address,
          }}
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <div>
            <Input name="name" placeholder="Nome" disabled={!!place.id} />

            <Input
              name="cep"
              placeholder="CEP"
              disabled={!!place.id}
              onChange={({ target }) => setCep(target.value)}
            />
          </div>

          <div>
            <Input name="city" placeholder="Cidade" disabled={!!place.id} />

            <Input name="state" placeholder="Estado" disabled={!!place.id} />
          </div>

          <div>
            <Input
              name="neighborhood"
              placeholder="Bairro"
              disabled={!!place.id}
            />

            <Input name="street" placeholder="Rua" disabled={!!place.id} />
          </div>

          <div>
            <Input name="number" placeholder="Número" disabled={!!place.id} />
            <Input
              name="complement"
              placeholder="Complemento"
              disabled={!!place.id}
            />
          </div>
          {!place.id && <Button type="submit">Salvar</Button>}
        </Form>
      </ContentAuth>

      {!!place.id && <FormResponsible placeId={place.id} companyId={null} />}
    </ContainerAuth>
  );
}
