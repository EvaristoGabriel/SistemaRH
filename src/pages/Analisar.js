import { Link } from "react-router-dom"
import styles from "../components/layout/Menu.module.css"

function Analisar(){
    return (
        <div className="App">
            <header className="App-header">
                Analisar 
            </header>
            <br></br>
            <div class={styles.menu}>
                <ul class ={styles.list}>
                </ul>
            </div>
        </div>
    )
}

export default Analisar