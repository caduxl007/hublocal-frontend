import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { ISignInFormData } from '../models/auth';
import api from '../services/api';
import { signInAuth } from '../services/routes/Auth.service';

interface AuthState {
  token: string;
}

interface AuthContextData {
  token: string;
  signIn(credentials: ISignInFormData): Promise<void>;
  signOut(): void;
}

type AuthProviderProps = {
  children: ReactNode;
};

export function signOutChannel() {
  localStorage.removeItem('HubLocal:token');

  authChannel.postMessage('signOut');
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

let authChannel: BroadcastChannel;

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();

  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('HubLocal:token');

    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(
    async ({ email, password }: ISignInFormData) => {
      const response = await signInAuth({ email, password });

      const { token } = response.data;

      localStorage.setItem('HubLocal:token', token);

      setData({ token });
      api.defaults.headers.authorization = `Bearer ${token}`;

      authChannel.postMessage('signIn');
      navigate('/dashboard');
    },
    [navigate],
  );

  const signOut = useCallback(() => {
    setData({} as AuthState);
    localStorage.removeItem('HubLocal:token');
    navigate('/');
  }, [navigate]);

  useEffect(() => {
    authChannel = new BroadcastChannel('auth');

    authChannel.onmessage = (message) => {
      switch (message.data) {
        case 'signOut':
          signOut();
          break;
        case 'signIn':
          navigate('/dashboard');
          break;
        default:
          break;
      }
    };
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ token: data.token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
