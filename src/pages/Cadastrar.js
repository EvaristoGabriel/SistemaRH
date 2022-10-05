import { Link } from "react-router-dom"
import styles from "../components/layout/Cadastrar.module.css"

function Cadastrar(){
    return (
        <div className="App">
            <header className="App-header">
                Cadastro 
            </header>
            <br></br>
            <div className={styles.menu}>
                <ul className ={styles.list}>
                </ul>
            </div>
        </div>
    )
}

export default Cadastrar