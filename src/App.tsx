import { AppProvider } from './contexts';
import GlobalStyles from './styles/global';
import { AppRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppProvider>
          <AppRoutes />

          <GlobalStyles />
          <ToastContainer />
        </AppProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
