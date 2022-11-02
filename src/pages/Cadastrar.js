import { Link } from "react-router-dom"
import styles from "../components/layout/Cadastrar.module.css"
import { Button } from "@mui/material"
import styleButton from "../components/layout/StyleButton.module.css"

function cadastro(valor) {
    return (
        <form key={valor}>
            <input name="name" autoComplete="off" required className={styles.input} />
            <label className={styles.label} htmlFor="name">
                <span className={styles.span}>{valor}</span>
            </label>
        </form>
    )
}

function Cadastrar() {
    const campos = [
        { id: 1, text: "Nome"},
        { id: 2, text: "Data de Nascimento"},
        { id: 3, text: "Nacionalidade"},
        { id: 3, text: "Naturalidade"},
        { id: 3, text: "Grau de Instrução"},
        { id: 3, text: "Estado Civil"},
        { id: 3, text: "Sexo"},
        { id: 3, text: "Raça"},
      ];
    return (
        <div className="App">
            <header className="App-header">
                Cadastro
            </header>
            <br></br>
<<<<<<< HEAD
            <Button class={styleButton.button} href="/menu" size="small">Voltar</Button>
=======
            {campos.map((campo) =>(
                cadastro(campo.text)
            ))}
            <Button class={styleButton.button} href="/menu" size="medium">Voltar</Button>
>>>>>>> 055c59ddc3d51010969b72ebf883d6a9d091b487
        </div>
    )
}

export default Cadastrar