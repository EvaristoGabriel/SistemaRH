import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Menu from './pages/Menu';
import Login from './pages/Login';
import Cadastrar from './pages/Cadastrar';
import Editar from './pages/Editar';
import Excluir from './pages/Excluir';
import Buscar from './pages/Buscar';
import Analisar from './pages/Analisar';
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
            <Route path="/excluir/*" element={<Excluir />} />
            <Route path="/editar/*" element={<Editar />} />
            <Route path="/buscar/*" element={<Buscar />} />
            <Route path="/analisar/*" element={<Analisar />} />
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
