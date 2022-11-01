import { Link, useParams } from "react-router-dom"
import styles from "../components/layout/Buscar.module.css"
import { Button } from "@mui/material"
import styleButton from "../components/layout/StyleButton.module.css"
import styleBotaoCheck from "../components/layout/BotaoCheck.module.css"
import { useLocation } from "react-router-dom"

function Pesquisar() {
    const location = useLocation();
    const vec = location.state;
    const opcao = location.state[0];
    console.log(opcao)
    vec.shift();

    return (
        <buscar className="App">
            <header className="App-header">
                Pesquisar
            </header>
            <br></br>
            {vec.map(({}))}
            
            {opcao == "excluir" && <button className={styleButton.button}>Pesquisar</button>}
            {opcao == "editar" && <button className={styleButton.button}>Pesquisar</button>}
            {opcao == "buscar" && <button className={styleButton.button}>Pesquisar</button>}
            {opcao == "analisar" && <button className={styleButton.button}>Pesquisar</button>}
            <Button class={styleButton.button} href="/menu" size="medium">Voltar</Button>
        </buscar>
    )
}

export default Pesquisar