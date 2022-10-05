import { Link } from "react-router-dom"
import styles from "../components/layout/Relatorio.module.css"

function Relatorio(){
    return (
        <relatorio className="App">
            <header className="App-header">
                Relatório 
            </header>
            <br></br>
            <h2 className={styles.h2}>
                Quais itens você quer no relatório?
            </h2>
            <div className={styles.menu}>
                <label className={styles.label}>
                    <input className={styles.input} type="checkbox"></input>
                    <span className={styles.checkbox}></span>
                    <p className={styles.text}>Nome</p>
                </label> <br></br>
                <label className={styles.label}>
                    <input className={styles.input} type="checkbox"></input>
                    <span className={styles.checkbox}></span>
                    <p className={styles.text}>CPF</p>
                </label><br></br>
                <label className={styles.label}>
                    <input className={styles.input} type="checkbox"></input>
                    <span className={styles.checkbox}></span>
                    <p className={styles.text}>Cargo</p>
                </label><br></br>
                <label className={styles.label}>
                    <input className={styles.input} type="checkbox"></input>
                    <span className={styles.checkbox}></span>
                    <p className={styles.text}>Salário</p>
                </label><br></br>
                <label className={styles.label}>
                    <input className={styles.input} type="checkbox"></input>
                    <span className={styles.checkbox}></span>
                    <p className={styles.text}>Sexo</p>
                </label><br></br>
                <label className={styles.label}>
                    <input className={styles.input} type="checkbox"></input>
                    <span className={styles.checkbox}></span>
                    <p className={styles.text}>E-mail</p>
                </label> <br></br>
                <label className={styles.label}>
                    <input className={styles.input} type="checkbox"></input>
                    <span className={styles.checkbox}></span>
                    <p className={styles.text}>Data de Nascimento</p>
                </label> <br></br>
                <label className={styles.label}>
                    <input className={styles.input} type="checkbox"></input>
                    <span className={styles.checkbox}></span>
                    <p className={styles.text}>Tudo</p>
                </label> <br></br>
            </div>
            <button class={styles.button}>Gerar Relatório</button>
        </relatorio>
    )
}

export default Relatorio