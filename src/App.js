import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/cadastrar" element={<Cadastrar/>}/>
        <Route path="/excluir" element={<Excluir/>}/>
        <Route path="/editar" element={<Editar/>}/>
        <Route path="/buscar" element={<Buscar/>}/>
        <Route path="/analisar" element={<Analisar/>}/>
        <Route path="/relatorio" element={<Relatorio/>}/>
        <Route path="/pesquisa" element={<Pesquisa/>}/>
      </Routes>
    </Router>
  );
}

export default App;
