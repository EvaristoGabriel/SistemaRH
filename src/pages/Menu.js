import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import styles from "../components/layout/Menu.module.css"
import Cadastrar from './Cadastrar';

function Menu(){
    return (
        <menu className="App">
            <header className="App-header">
                MENU 
            </header>
            <br></br>
            <div className={styles.menu}>
                <ul className ={styles.list}>
                    <li className={styles.item}>
                        <Link to="/cadastrar"> Cadastrar Funcionário</Link>
                        <div className={styles.retangulo}></div>
                    </li>
                    <li className={styles.item}>
                        <Link to="/excluir"> Excluir Funcionário</Link>
                        <div className={styles.retangulo}></div>
                    </li>
                    <li className={styles.item}>
                        <Link to="/editar"> Editar Funcionário</Link>
                        <div className={styles.retangulo}></div>
                    </li>
                    <li className={styles.item}>
                        <Link to="/buscar"> Buscar Funcionário</Link>
                        <div className={styles.retangulo}></div>
                    </li>
                    <li className={styles.item}>
                        <Link to="/analisar"> Analisar Folga</Link>
                        <div className={styles.retangulo}></div>
                    </li>
                    <li className={styles.item}>
                        <Link to="/relatorio"> Gerar Relatório</Link>
                        <div className={styles.retangulo}></div>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route path="/cadastrar" element={<Cadastrar/>}/>
            </Routes>
        </menu>
    )
}

export default Menu