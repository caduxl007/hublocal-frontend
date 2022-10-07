import * as S from './styles';
import { Logo } from '../Logo';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function goBack() {
    navigate(-1);
  }

  return (
    <>
      <Helmet>
        <title>Desafio HubLocal | {title}</title>
        <meta
          name="description"
          content="Site de gerenciamentos de empresas, locais e responsáveis"
        />
        <link rel="canonical" href={pathname} />
      </Helmet>
      <S.Container>
        <Link to="/dashboard">
          <Logo />
        </Link>

        <div>
          {pathname === '/dashboard' ? (
            <>
              <Link to="/tickets">Tickets</Link>
              <button onClick={signOut} type="button">
                Sair
              </button>
            </>
          ) : (
            <button onClick={goBack} type="button">
              Voltar
            </button>
          )}
        </div>
      </S.Container>
    </>
  );
}
