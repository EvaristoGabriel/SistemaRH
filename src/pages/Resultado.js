import styles from "../components/layout/Pesquisa.module.css"
import { Button } from "@mui/material"
import styleButton from "../components/layout/StyleButton.module.css"
import { useLocation } from "react-router-dom"
import { H1 } from "../components/layout/Resultado.style"


function verificarOpcao(opcao) {
    if (opcao == "excluir") {
        return (
            <div>
                <H1>Excluir</H1>
                <div></div>
            </div>
        )
    }
    if (opcao == "editar") {
        return (
            <div>
                <H1>Editar</H1>
            </div>
        )
    }
    if (opcao == "buscar") {
        return (
            <div>
                <H1>Buscar</H1>
            </div>
        )
    }
    if (opcao == "analisar") {
        return (
            <div>
                <H1>Analisar</H1>
            </div>
        )
    }
}

function Resultado() {
    const location = useLocation();
    const opcao = location.state;
    console.log("opcao "+location)
    return (
        <div className="App">
            <header className="App-header">Resultado</header>
            <br></br>
            {verificarOpcao(opcao)}
            <div className={styles.botoes}><Button class={styleButton.button} href="/menu" size="small">Menu</Button></div>
        </div>
    )
}

export default Resultado