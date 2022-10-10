import { Link } from "react-router-dom"
import styles from "../components/layout/Buscar.module.css"
import { Button } from "@mui/material"
import styleButton from "../components/layout/StyleButton.module.css"
import styleBotaoCheck from "../components/layout/BotaoCheck.module.css"

function Buscar() {
    return (
        <buscar className="App">
            <header className="App-header">
                Buscar
            </header>
            <br></br>
            <h2 className={styles.h2}>
                Como deseja buscar o funcionário?
            </h2>
            <div className={styles.menu}>
                <label className={styles.label}>
                    <input className={styleBotaoCheck.input} type="checkbox"></input>
                    <span className={styleBotaoCheck.checkbox}></span>
                    <p className={styles.text}>Nome</p>
                </label> <br></br>
                <label className={styles.label}>
                    <input className={styleBotaoCheck.input} type="checkbox"></input>
                    <span className={styleBotaoCheck.checkbox}></span>
                    <p className={styles.text}>CPF</p>
                </label><br></br>
                <label className={styles.label}>
                    <input className={styleBotaoCheck.input} type="checkbox"></input>
                    <span className={styleBotaoCheck.checkbox}></span>
                    <p className={styles.text}>Cargo</p>
                </label><br></br>
                <label className={styles.label}>
                    <input className={styleBotaoCheck.input} type="checkbox"></input>
                    <span className={styleBotaoCheck.checkbox}></span>
                    <p className={styles.text}>Salário</p>
                </label><br></br>
                <label className={styles.label}>
                    <input className={styleBotaoCheck.input} type="checkbox"></input>
                    <span className={styleBotaoCheck.checkbox}></span>
                    <p className={styles.text}>Sexo</p>
                </label><br></br>
                <label className={styles.label}>
                    <input className={styleBotaoCheck.input} type="checkbox"></input>
                    <span className={styleBotaoCheck.checkbox}></span>
                    <p className={styles.text}>E-mail</p>
                </label> <br></br>
                <label className={styles.label}>
                    <input className={styleBotaoCheck.input} type="checkbox"></input>
                    <span className={styleBotaoCheck.checkbox}></span>
                    <p className={styles.text}>Data de Nascimento</p>
                </label> <br></br>
                <label className={styles.label}>
                    <input className={styleBotaoCheck.input} type="checkbox"></input>
                    <span className={styleBotaoCheck.checkbox}></span>
                    <p className={styles.text}>Tudo</p>
                </label> <br></br>
            </div>
            <button class={styleButton.button}>Pesquisar</button>
            <Button class={styleButton.button} href="/menu" size="medium">Voltar</Button>
        </buscar>
    )
}

export default Buscar