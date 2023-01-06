import styles from "../components/layout/Pesquisa.module.css"
import { Button } from "@mui/material"
import styleButton from "../components/layout/StyleButton.module.css"

function Resultado() {
    return (
        <div className="App">
            <header className="App-header">Resultado</header>
            <br></br>
            <div className={styles.botoes}><Button class={styleButton.button} href="/menu" size="small">Menu</Button></div>
        </div>
    )
}

export default Resultado