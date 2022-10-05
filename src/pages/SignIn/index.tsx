import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Container, Content } from './styles';
import { getValidationErrors } from '../../utils/getValidationErrors';
import { Button, Logo } from '../../components';
import { Input } from '../../components/Input';

interface ISignInFormData {
  email: string;
  password: string;
}

export function SignIn() {
  const [loading, setLoading] = useState(false);

  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: ISignInFormData) {
    try {
      setLoading(true);
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite um email válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
        return;
      }

      alert('Falha ao tentar logar');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Content>
        <Logo />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" placeholder="Email" />

          <Input name="password" placeholder="Senha" type="password" />

          <Link to="/signup">Cadastra-se</Link>

          <Button isLoading={loading} type="submit">
            Entrar
          </Button>
        </Form>
      </Content>
    </Container>
  );
}
