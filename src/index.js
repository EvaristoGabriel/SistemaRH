import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './index.css';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
