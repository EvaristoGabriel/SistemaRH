import { Routes, Route, Link } from 'react-router-dom';
import Menu from './Menu';
import styles from "../components/layout/Login.module.css"

function Login() {
    return (
        <div className="App">
            <header className="App-header">
                LOGIN
            </header>
            <br/>
            <p className={styles.InputLogin}>Usuário:</p>
            <input type="text" className={styles.input}></input>
            <p className={styles.InputLogin}>Senha:</p>
            <input type="password" className={styles.input}></input>
            <br/>
            <br/>
            <br/>
            <br/>
            <Link to="/menu" className={styles.button}>ENTER</Link>
            <Routes>
                <Route path="/menu" element={<Menu />} />
            </Routes>
        </div>
    )
}

export default Login