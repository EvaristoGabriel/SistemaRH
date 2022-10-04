import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Menu from './Menu';

function Login(){
    return (
    <div className="App">
        <header className="App-header">
        LOGIN 
        </header>
        <br></br>
        <p className="InputLogin">Usuário:</p>
        <input type="text" className="input"></input>
        <p className="InputLogin">Senha:</p>
        <input type="password" className="input"></input>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Link to="/menu" className="button" >ENTER</Link>
        <Routes>
        <Route path="/menu" element={<Menu/>} />
        </Routes>
    </div>
    )
}

export default Login