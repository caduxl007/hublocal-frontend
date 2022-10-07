import { useCallback, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import * as S from './styles';
import { getValidationErrors } from '../../utils/getValidationErrors';
import { Input } from '../../components/Input';
import { Button, Logo } from '../../components';
import { toast } from 'react-toastify';
import { ISignUpFormData } from '../../models/auth';
import { Helmet } from 'react-helmet-async';
import { schemaSignUp } from '../../utils/yup/schemas-validations';
import { signUpAuth } from '../../services/routes/Auth.service';

export function SignUp() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ISignUpFormData) => {
      try {
        setLoading(true);

        formRef.current?.setErrors({});

        const schema = schemaSignUp;

        await schema.validate(data, {
          abortEarly: false,
        });

        await signUpAuth(data);

        toast.success('Cadastro feito com sucesso!');

        navigate('/');
      } catch (err: any) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }

        toast.error(err?.response?.data?.message);
      } finally {
        setLoading(false);
      }
    },
    [navigate],
  );

  return (
    <>
      <Helmet>
        <title>Desafio HubLocal | Cadastro</title>
        <meta
          name="description"
          content="Site de gerenciamentos de empresas, locais e responsáveis"
        />
        <link rel="canonical" href="/signup" />
      </Helmet>
      <S.Container>
        <S.Content>
          <Logo />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="name" placeholder="Nome" />
            <Input name="email" placeholder="Email" />

            <Input name="password" placeholder="Senha" type="password" />

            <Input
              name="passwordRepeat"
              placeholder="Confirme sua senha"
              type="password"
            />

            <Link to="/">Voltar para login</Link>

            <Button isLoading={loading} type="submit">
              Cadastrar
            </Button>
          </Form>
        </S.Content>
      </S.Container>
    </>
  );
}
