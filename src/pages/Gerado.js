import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Menu from './Menu';
import styles from "../components/layout/Gerado.module.css"
import { Button } from "@mui/material"
import styleButton from "../components/layout/StyleButton.module.css"

function Gerado() {
    return (
        <div className="App">
            <br></br>
            <header className="App-header">
                Relatorio gerado com Sucesso
            </header>

            <div className={styles.menu}>
            <h2 className={styles.h2}>Foi gerado um Arquivo chamado 
                Relatorio.txt
            </h2>
            <Button class={styleButton.button} href="/menu" size="medium">Voltar</Button>
            </div>
        </div>
    )
}

export default Gerado