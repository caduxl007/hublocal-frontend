import { ISignInFormData, ISignUpFormData } from '../../models/auth';
import api from '../api';

export async function signInAuth({ email, password }: ISignInFormData) {
  const response = await api.post('auth/signin', {
    email,
    password,
  });

  return response;
}

export async function signUpAuth(data: ISignUpFormData) {
  const response = await api.post('/auth/signup', data);

  return response;
}
