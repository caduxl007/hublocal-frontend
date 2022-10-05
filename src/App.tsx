import { AppProvider } from './contexts';
import GlobalStyles from './styles/global';
import { AppRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <AppRoutes />

        <GlobalStyles />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
