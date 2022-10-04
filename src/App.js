import logo from './Grupo3.png';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Menu from './pages/Menu';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <img src={logo} className="App-logo" alt="logo" />
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route path="/menu" element={<Menu/>}/>
      </Routes>
    </Router>
  );
}

export default App;
