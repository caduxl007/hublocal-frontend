import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { ModalContent } from '..';
import { useFetchCep } from '../../../hooks/useFetchCep';
import { ICreatePlaceFormData, IPlace } from '../../../models/place';
import { editPlace } from '../../../services/routes/Place.service';
import { getValidationErrors } from '../../../utils/getValidationErrors';
import { schemaEditPlace } from '../../../utils/yup/schemas-validations';
import { Button } from '../../Button';
import { Input } from '../../Input';
import { ContentAuth } from '../../templates/ContentAuth';
import { TitleContent } from '../../TitleContent';

type ModalEditPlaceProps = {
  place: IPlace;
  isModalOpen: boolean;
  onCloseModal: () => void;
  reloadData: () => void;
};

export function ModalEditPlace({
  place,
  isModalOpen,
  onCloseModal,
  reloadData,
}: ModalEditPlaceProps) {
  const formRef = useRef<FormHandles>(null);
  const [cep, setCep] = useState('');
  const { address } = useFetchCep(cep);

  async function handleSubmit(data: ICreatePlaceFormData) {
    try {
      formRef.current?.setErrors({});

      const schema = schemaEditPlace;

      await schema.validate(data, {
        abortEarly: false,
      });

      await editPlace(place.id, data);

      onCloseModal();
      toast.success('Ticket de edição gerado com sucesso!');

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

  useEffect(() => {
    formRef.current?.setData({
      ...address,
    });
  }, [address]);

  return (
    <ModalContent isModalOpen={isModalOpen} onCloseModal={onCloseModal}>
      <ContentAuth>
        <TitleContent>Atualizar Local</TitleContent>

        <Form
          initialData={{ ...place, ...place.address }}
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <div>
            <Input name="name" placeholder="Nome" />

            <Input
              name="cep"
              placeholder="CEP"
              onChange={({ target }) => setCep(target.value)}
            />
          </div>

          <div>
            <Input name="city" placeholder="Cidade" />

            <Input name="state" placeholder="Estado" />
          </div>

          <div>
            <Input name="neighborhood" placeholder="Bairro" />

            <Input name="street" placeholder="Rua" />
          </div>

          <div>
            <Input name="number" placeholder="Número" />
            <Input name="complement" placeholder="Complemento" />
          </div>

          <div>
            <Input
              name="emailToUser"
              placeholder="E-mail do usuário recebedor"
            />
          </div>
          <Button type="submit">Atualizar</Button>
        </Form>
      </ContentAuth>
    </ModalContent>
  );
}
