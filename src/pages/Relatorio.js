import { Link } from "react-router-dom"
import styles from "../components/layout/Relatorio.module.css"
import styleButton from "../components/layout/StyleButton.module.css"
import { Button } from "@mui/material"
import styleBotaoCheck from "../components/layout/BotaoCheck.module.css"

function Relatorio() {
    return (
        <div className="App">
            <header className="App-header">
                Relatório
            </header>
            <br></br>
            <h2 className={styles.h2}>
                Quais itens você quer no relatório?
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
            <button className={styleButton.button}>Gerar Relatório</button>
            <Button class={styleButton.button} href="/menu" size="medium">Voltar</Button>
        </div>
    )
}

export default Relatorio