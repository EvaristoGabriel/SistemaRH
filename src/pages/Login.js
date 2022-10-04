import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Menu from './Menu';
import styles from "../components/layout/Login.module.css"

function Login(){
    return (
    <div className="App">
        <header class="App-header">
        LOGIN 
        </header>
        <br></br>
        <p class={styles.InputLogin}>Usuário:</p>
        <input type="text" class={styles.input}></input>
        <p class={styles.InputLogin}>Senha:</p>
        <input type="password" class={styles.input}></input>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Link to="/menu" class={styles.button}>ENTER</Link>
        <Routes>
        <Route path="/menu" element={<Menu/>} />
        </Routes>
    </div>
    )
}

export default Login