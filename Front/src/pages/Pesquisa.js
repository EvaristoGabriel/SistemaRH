import { Link } from "react-router-dom"
import styles from "../components/layout/Pesquisa.module.css"
import { Button } from "@mui/material"
import styleButton from "../components/layout/StyleButton.module.css"
import React, { useState } from "react";

function Pesquisar() {
    const [inputs, setInputs] = useState([
        { id: 0, value: "" },
        { id: 1, value: "" },
    ]);

    function handleInputChange(index, event) {
        const NovosInputs = [...inputs];
        NovosInputs[index].value = event.target.value;
        setInputs(NovosInputs);
    }
    function handleClick(){
        if (inputs[0].value === "" && inputs[1].value === ""){
            alert("Por favor digite um nome ou CPF");
        }
        else{
            //Mandar as informações para o backend

        }
    }
    return (
        <div className="App">
            <header className="App-header">
                Pesquisar
            </header>
            <br></br>
            <div className={styles.menu}>
                <input onChange={(e) => handleInputChange(0, e)} placeholder="Nome" type="text" className={styles.input} />
                <input onChange={(e) => handleInputChange(1, e)} placeholder="CPF" type="text" className={styles.input} />
            </div>

            <div className={styles.botoes}><Link to="/resultado" className={styleButton.button} onClick={handleClick}>Pesquisar</Link></div>
            <div className={styles.botoes}><Button class={styleButton.button} href="/menu" size="small">Voltar</Button></div>
        </div>
    )
}

export default Pesquisar