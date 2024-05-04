import ReactDOM from 'react-dom/client'
import { AppContext } from './context/AppContext.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './pages/Router/AppRouter.jsx';
import { NextUIProvider } from '@nextui-org/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContext>
      <NextUIProvider>
        <AppRouter />
      </NextUIProvider>
    </AppContext>
  </BrowserRouter>
)
