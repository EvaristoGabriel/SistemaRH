import { Link } from "react-router-dom"
import styles from "../components/layout/Menu.module.css"

function Excluir(){
    return (
        <div className="App">
            <header className="App-header">
                Excluir 
            </header>
            <br></br>
            <div class={styles.menu}>
                <ul class ={styles.list}>
                </ul>
            </div>
        </div>
    )
}

export default Excluir