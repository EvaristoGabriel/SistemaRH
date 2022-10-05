import { Link } from "react-router-dom"
import styles from "../components/layout/Editar.module.css"

function Editar(){
    return (
        <div className="App">
            <header className="App-header">
                Editar 
            </header>
            <br></br>
            <div className={styles.menu}>
                <ul className ={styles.list}>
                </ul>
            </div>
        </div>
    )
}

export default Editar