import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styles from "../components/layout/Menu.module.css"
import Cadastrar from './Cadastrar';
import styleButton from "../components/layout/StyleButton.module.css"
import { Button } from "@mui/material"


function Menu() {
   
    return (
        <menu className="App">
            <header className="App-header">
                MENU
            </header>
            <br></br>
            <div className={styles.menu}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/cadastrar"> Cadastrar Funcionário</Link>
                        <div className={styles.retangulo}></div>
                    </li>
                    <li className={styles.item}>
                        <Link to="/buscar" state={"excluir"}> Excluir Funcionário</Link>
                        <div className={styles.retangulo}></div>
                    </li>
                    <li className={styles.item}>
                        <Link to="/buscar" state={"editar"}> Editar Funcionário</Link>
                        <div className={styles.retangulo}></div>
                    </li>
                    <li className={styles.item}>
                        <Link to="/buscar" state={"buscar"}> Buscar Funcionário</Link>
                        <div className={styles.retangulo}></div>
                    </li>
                    <li className={styles.item}>
                        <Link to="/buscar" state={"analisar"}> Analisar Folga</Link>
                        <div className={styles.retangulo}></div>
                    </li>
                    <li className={styles.item}>
                        <Link to="/relatorio"> Gerar Relatório</Link>
                        <div className={styles.retangulo}></div>
                    </li>
                </ul>
            </div>
            <Button class={styleButton.button} href="/" size="medium">Sair</Button>
            <Routes>
                <Route path="/cadastrar" element={<Cadastrar />} />
            </Routes>
        </menu>
    )
}

export default Menu