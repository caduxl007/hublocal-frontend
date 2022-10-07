import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import * as S from './styles';
import { getValidationErrors } from '../../utils/getValidationErrors';
import { Button, Logo } from '../../components';
import { Input } from '../../components/Input';
import { useAuth } from '../../contexts/AuthContext';
import { toast } from 'react-toastify';
import { ISignInFormData } from '../../models/auth';
import { Helmet } from 'react-helmet-async';
import { schemaSignIn } from '../../utils/yup/schemas-validations';

export function SignIn() {
  const [loading, setLoading] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  async function handleSubmit(data: ISignInFormData) {
    try {
      setLoading(true);
      formRef.current?.setErrors({});

      const schema = schemaSignIn;

      await schema.validate(data, {
        abortEarly: false,
      });

      await signIn(data);
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
  }

  return (
    <>
      <Helmet>
        <title>Desafio HubLocal | Login</title>
        <meta
          name="description"
          content="Site de gerenciamentos de empresas, locais e responsáveis"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <S.Container>
        <S.Content>
          <Logo />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="email" placeholder="Email" />

            <Input name="password" placeholder="Senha" type="password" />

            <Link to="/signup">Cadastra-se</Link>

            <Button isLoading={loading} type="submit">
              Entrar
            </Button>
          </Form>
        </S.Content>
      </S.Container>
    </>
  );
}
