import { Link } from "react-router-dom"
import styles from "../components/layout/Buscar.module.css"

function Buscar(){
    return (
        <div className="App">
            <header className="App-header">
                Buscar 
            </header>
            <br></br>
            <div className={styles.menu}>
                <ul className ={styles.list}>
                </ul>
            </div>
        </div>
    )
}

export default Buscar