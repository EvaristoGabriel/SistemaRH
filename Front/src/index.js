import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Cabecalho from '../src/pages/Cabecalho'
import { ThemeProvider } from '@mui/material';
import tema from './theme/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={tema}>
    <React.StrictMode>
      <Cabecalho/>    
      <App />
    </React.StrictMode>
  </ThemeProvider>
);

reportWebVitals();
