import { Link } from "react-router-dom"
import styles from "../components/layout/Analisar.module.css"

function Analisar(){
    return (
        <div className="App">
            <header className="App-header">
                Analisar 
            </header>
            <br></br>
            <div className={styles.menu}>
                <ul className ={styles.list}>
                </ul>
            </div>
        </div>
    )
}

export default Analisar