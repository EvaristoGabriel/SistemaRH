import logo from './Grupo3.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
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
      <button className="button" >ENTER</button>
    </div>
  );
}

export default App;
