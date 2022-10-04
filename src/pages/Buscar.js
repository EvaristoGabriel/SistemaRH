import { Link } from "react-router-dom"
import styles from "../components/layout/Menu.module.css"

function Buscar(){
    return (
        <div className="App">
            <header className="App-header">
                Buscar 
            </header>
            <br></br>
            <div class={styles.menu}>
                <ul class ={styles.list}>
                </ul>
            </div>
        </div>
    )
}

export default Buscar