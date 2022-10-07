import * as Yup from 'yup';

export const schemaSignUp = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  email: Yup.string()
    .required('Email obrigatório')
    .email('Digite um email válido'),
  password: Yup.string().min(6, 'No mínimo 6 dígitos'),
  passwordRepeat: Yup.string()
    .required('Confirmação de senha é obrigatório')
    .oneOf([Yup.ref('password'), ''], 'Senhas não conferem'),
});

export const schemaSignIn = Yup.object().shape({
  email: Yup.string()
    .required('Email obrigatório')
    .email('Digite um email válido'),
  password: Yup.string().required('Senha obrigatória'),
});

export const schemaCreatePlace = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  cep: Yup.string().required('CEP obrigatório'),
  city: Yup.string().required('Cidade obrigatória'),
  state: Yup.string().required('Estado obrigatório'),
  neighborhood: Yup.string().required('Bairro obrigatório'),
  street: Yup.string().required('Rua obrigatória'),
  number: Yup.string().required('Número obrigatório'),
  complement: Yup.string().required('Complemento obrigatório'),
});

export const schemaCreateCompany = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  cnpj: Yup.string().length(14, 'CNPJ deve ter 14 digitos').required('CNPJ obrigatório'),
  description: Yup.string().required('Descrição obrigatória'),
});

export const schemaCreateResponsible = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  telephone: Yup.string().required('Telefone obrigatório'),
  cep: Yup.string().required('CEP obrigatório'),
  city: Yup.string().required('Cidade obrigatória'),
  state: Yup.string().required('Estado obrigatório'),
  neighborhood: Yup.string().required('Bairro obrigatório'),
  street: Yup.string().required('Rua obrigatória'),
  number: Yup.string().required('Número obrigatório'),
  complement: Yup.string().required('Complemento obrigatório'),
});

export const schemaEditPlace = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  cep: Yup.string().required('CEP obrigatório'),
  city: Yup.string().required('Cidade obrigatória'),
  state: Yup.string().required('Estado obrigatório'),
  neighborhood: Yup.string().required('Bairro obrigatório'),
  street: Yup.string().required('Rua obrigatória'),
  number: Yup.string().required('Número obrigatório'),
  complement: Yup.string().required('Complemento obrigatório'),
  emailToUser: Yup.string()
    .email('Informe um e-mail válido')
    .required('Informe o e-mail do usuario que recebera o ticket'),
});
