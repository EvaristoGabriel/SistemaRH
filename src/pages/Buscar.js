import { Link } from "react-router-dom"
import styles from "../components/layout/Buscar.module.css"
import { Button } from "@mui/material"
import styleButton from "../components/layout/StyleButton.module.css"

function Buscar() {
    return (
        <div className="App">
            <header className="App-header">
                Buscar
            </header>
            <br></br>
            <div className={styles.menu}>
            <Button class={styleButton.button} href="/menu" size="medium">Voltar</Button>
            </div>
        </div>
    )
}

export default Buscar