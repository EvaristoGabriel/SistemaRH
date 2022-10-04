import { Link } from "react-router-dom"
import styles from "../components/layout/Menu.module.css"

function Cadastrar(){
    return (
        <div className="App">
            <header className="App-header">
                Cadastro 
            </header>
            <br></br>
            <div class={styles.menu}>
                <ul class ={styles.list}>
                </ul>
            </div>
        </div>
    )
}

export default Cadastrar