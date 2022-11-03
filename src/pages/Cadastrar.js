import { Link } from "react-router-dom"
import styles from "../components/layout/Cadastrar.module.css"
import { Button } from "@mui/material"
import styleButton from "../components/layout/StyleButton.module.css"

function cadastro(valor) {
    return ( 
        <div className={styles.menu}>
            <form key={valor}>
                <input name="name" autoComplete="off" required className={styles.input} />
                <label className={styles.label} htmlFor="name">
                    <span className={styles.span}>{valor}</span>
                </label>
            </form>
        </div>
    )
}

function Cadastrar() {
    const campos = [
        { id: 1, text: "Nome"},
        { id: 2, text: "Data de Nascimento"},
        { id: 3, text: "Nacionalidade"},
        { id: 4, text: "Naturalidade"},
        { id: 5, text: "Grau de Instrução"},
        { id: 6, text: "Estado Civil"},
        { id: 7, text: "Sexo"},
        { id: 8, text: "Raça"},
        { id: 9, text: "Filiação"},
        { id: 10, text: "CPF"},
      ];
    return (
        <div className="App">
            <header className="App-header">
                Cadastro
            </header>
            <br></br>
            {campos.map((campo) =>(
                cadastro(campo.text)
                ))}
            <Button class={styleButton.button} href="/menu" size="small">Voltar</Button>
        </div>
    )
}

export default Cadastrar