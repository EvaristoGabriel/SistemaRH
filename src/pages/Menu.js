import { Link } from "react-router-dom"
import styles from "../components/layout/Menu.module.css"
function Menu(){
    return (
        <menu className="App">
            <header className="App-header">
                MENU 
            </header>
            <br></br>
            <div class={styles.menu}>
                <ul class ={styles.list}>
                    <li class={styles.item}>
                        <Link to="/cadastrar"> Cadastrar Funcionário</Link>
                        <div class={styles.retangulo}></div>
                    </li>
                    <li class={styles.item}>
                        <Link to="/excluir"> Excluir Funcionário</Link>
                        <div class={styles.retangulo}></div>
                    </li>
                    <li class={styles.item}>
                        <Link to="/editar"> Editar Funcionário</Link>
                        <div class={styles.retangulo}></div>
                    </li>
                    <li class={styles.item}>
                        <Link to="/buscar"> Buscar Funcionário</Link>
                        <div class={styles.retangulo}></div>
                    </li>
                    <li class={styles.item}>
                        <Link to="/analisar"> Analisar Folga</Link>
                        <div class={styles.retangulo}></div>
                    </li>
                    <li class={styles.item}>
                        <Link to="/relatorio"> Gerar Relatório</Link>
                        <div class={styles.retangulo}></div>
                    </li>
                </ul>
            </div>
        </menu>
    )
}

export default Menu