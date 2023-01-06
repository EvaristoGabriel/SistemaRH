import { Link } from "react-router-dom"
import styles from "../components/layout/Pesquisa.module.css"
import { Button } from "@mui/material"
import styleButton from "../components/layout/StyleButton.module.css"

function Pesquisar() {
    return (
        <div className="App">
            <header className="App-header">
                Pesquisar
            </header>
            <br></br>
            <div className={styles.menu}>
                <form key="nome">
                    <input name="name" autoComplete="off" required className={styles.input} />
                    <label className={styles.label} htmlFor="name">
                        <span className={styles.span}>NOME</span>
                    </label>
                </form>
                <form key="cpf">
                    <input name="name" autoComplete="off" required className={styles.input} />
                    <label className={styles.label} htmlFor="name">
                        <span className={styles.span}>CPF</span>
                    </label>
                </form>
            </div>

            <div className={styles.botoes}><Link to="/resultado" className={styleButton.button}>Pesquisar</Link></div>
            <div className={styles.botoes}><Button class={styleButton.button} href="/menu" size="small">Voltar</Button></div>
        </div>
    )
}

export default Pesquisar