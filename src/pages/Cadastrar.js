import { Link } from "react-router-dom"
import styles from "../components/layout/Cadastrar.module.css"
import { Button } from "@mui/material"
import styleButton from "../components/layout/StyleButton.module.css"

function Cadastrar() {
    return (
        <div className="App">
            <header className="App-header">
                Cadastro
            </header>
            <br></br>
            <div className={styles.menu}>
            <Button class={styleButton.button} href="/menu" size="medium">Voltar</Button>
            </div>
        </div>
    )
}

export default Cadastrar