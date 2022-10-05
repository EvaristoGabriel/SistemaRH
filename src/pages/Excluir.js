import { Link } from "react-router-dom"
import styles from "../components/layout/Excluir.module.css"

function Excluir(){
    return (
        <div className="App">
            <header className="App-header">
                Excluir 
            </header>
            <br></br>
            <div className={styles.menu}>
                <ul className ={styles.list}>
                </ul>
            </div>
        </div>
    )
}

export default Excluir