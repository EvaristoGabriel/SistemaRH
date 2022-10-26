import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import styles from "../components/layout/Excluir.module.css"
import styleButton from "../components/layout/StyleButton.module.css"

function Excluir() {
    return (
        <div className="App">
            <header className="App-header">
                Excluir
            </header>
            <br></br>
            <div className={styles.menu}>
            <Button class={styleButton.button} href="/menu" size="medium">Voltar</Button>
            </div>
        </div>
    )
}

export default Excluir