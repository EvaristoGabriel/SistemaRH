import styles from "../components/layout/Analisar.module.css"
import { Button } from "@mui/material"
import styleButton from "../components/layout/StyleButton.module.css"

function Analisar() {
    return (
        <div className="App">
            <header className="App-header">
                Analisar
            </header>
            <br></br>
            <div className={styles.menu}>
            <Button class={styleButton.button} href="/menu" size="medium">Voltar</Button>
            </div>
        </div>
    )
}

export default Analisar