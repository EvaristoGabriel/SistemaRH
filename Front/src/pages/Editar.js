import styles from "../components/layout/Editar.module.css"
import { Button } from "@mui/material"
import styleButton from "../components/layout/StyleButton.module.css"
import Buscar from "./Buscar"

function Editar() {
    return (
        <div className="App">
            <Buscar/>
            <header className="App-header">
                Editar
            </header>
            <br></br>
            <div className={styles.menu}>
            </div>
            <Button class={styleButton.button} href="/menu" size="medium">Voltar</Button>
        </div>
    )
}

export default Editar