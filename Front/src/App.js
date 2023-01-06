import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './pages/Menu';
import Login from './pages/Login';
import Cadastrar from './pages/Cadastrar';
import Buscar from './pages/Buscar';
import Relatorio from './pages/Relatorio';
import Pesquisa from './pages/Pesquisa';
import Resultado from './pages/Resultado';
import { ThemeProvider } from '@mui/material';
import tema from './theme/theme';
import Gerado from './pages/Gerado';

function App() {
  return (
    <section>
      <ThemeProvider theme={tema}>
        <Router>
          <Routes>
            <Route exact path="*" element={<Login />} />
            <Route path="/menu/*" element={<Menu />} />
            <Route path="/cadastrar/*" element={<Cadastrar />} />
            <Route path="/buscar/*" element={<Buscar />} />
            <Route path="/relatorio/*" element={<Relatorio />} />
            <Route path="/pesquisa/*" element={<Pesquisa />} />
            <Route path="/resultado/*" element={<Resultado />} />
            <Route path="/gerado/*" element={<Gerado />} />
          </Routes>
        </Router>
      </ThemeProvider>

    </section>
  );
}

export default App;
