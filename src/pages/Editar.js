import { Link } from "react-router-dom"
import styles from "../components/layout/Menu.module.css"

function Editar(){
    return (
        <div className="App">
            <header className="App-header">
                Editar 
            </header>
            <br></br>
            <div class={styles.menu}>
                <ul class ={styles.list}>
                </ul>
            </div>
        </div>
    )
}

export default Editar