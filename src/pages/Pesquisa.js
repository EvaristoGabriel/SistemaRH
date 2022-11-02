import { Link, useParams } from "react-router-dom"
import styles from "../components/layout/Pesquisa.module.css"
import { Button, useTheme } from "@mui/material"
import styleButton from "../components/layout/StyleButton.module.css"
import styleBotaoCheck from "../components/layout/BotaoCheck.module.css"
import { useLocation } from "react-router-dom"
import { Form, Label, Input, Span } from "../components/layout/Pesquisa.style"


function renderCondition(valor){
    if (valor == "Nome"){
        return (
            <form key="nome">
                <input name="name" autoComplete="off" required className = {styles.input}/>
                <label className = {styles.label} htmlFor="name"> 
                    <span className = {styles.span}>{valor}</span>
                </label>
            </form>
        )
    }
    if (valor == "Cpf"){
        return (
            <form key="cpf">
                <input name="name" autoComplete="off" required className = {styles.input}/>
                <label className = {styles.label} htmlFor="name"> 
                    <span className = {styles.span}>{valor}</span>
                </label>
            </form>
        )
    }
    if (valor == "Cargo"){
        return (
            <form key="cargo">
                <input name="name" autoComplete="off" required className = {styles.input}/>
                <label className = {styles.label} htmlFor="name"> 
                    <span className = {styles.span}>{valor}</span>
                </label>
            </form>
        )
    }
    if (valor == "Salario"){
        return (
            <form key="salario">
                <input name="name" autoComplete="off" required className = {styles.input}/>
                <label className = {styles.label} htmlFor="name"> 
                    <span className = {styles.span}>{valor}</span>
                </label>
            </form>
        )
    }
    if (valor == "Email"){
        return (
            <form key="email">
                <input name="name" autoComplete="off" required className = {styles.input}/>
                <label className = {styles.label} htmlFor="name"> 
                    <span className = {styles.span}>{valor}</span>
                </label>
            </form>
        )
    }
    if (valor == "Sexo"){
        return (
            <form key="sexo">
                <input name="name" autoComplete="off" required className = {styles.input}/>
                <label className = {styles.label} htmlFor="name"> 
                    <span className = {styles.span}>{valor}</span>
                </label>
            </form>
        )
    }
    if (valor == "Nascimento"){
        return (
            <form key="nascimento">
                <input name="name" autoComplete="off" required className = {styles.input}/>
                <label className = {styles.label} htmlFor="name"> 
                    <span className = {styles.span}>{valor}</span>
                </label>
            </form>
        )
    }
    if (valor == "Registro"){
        return (
            <form key="registro">
                <input name="name" autoComplete="off" required className = {styles.input}/>
                <label className = {styles.label} htmlFor="name"> 
                    <span className = {styles.span}>{valor}</span>
                </label>
            </form>
        )
    }
}

function Pesquisar() {
    const location = useLocation();
    const opcao = location.state[0];
    const vec = location.state;
    console.log(location)

    return (
        <div className="App">
            <header className="App-header">
                Pesquisar
            </header>
            <br></br>
            <div className={styles.menu}>
                {vec.map((valor) => 
                        renderCondition(valor)
                    )
                }
            </div>

            {opcao == "excluir" && <div className={styles.botoes}><Link to="/resultado" state={opcao} className={styleButton.button}>Pesquisar</Link></div>}
            {opcao == "editar" && <div className={styles.botoes}><Link to="/resultado" state={opcao} className={styleButton.button}>Pesquisar</Link></div>}
            {opcao == "buscar" && <div className={styles.botoes}><Link to="/resultado" state={opcao} className={styleButton.button}>Pesquisar</Link></div>}
            {opcao == "analisar" && <div className={styles.botoes}><Link to="/resultado" state={opcao} className={styleButton.button}>Pesquisar</Link></div>}
            <div className={styles.botoes}><Button class={styleButton.button} href="/menu" size="small">Voltar</Button></div>
        </div>
    )
}

export default Pesquisar