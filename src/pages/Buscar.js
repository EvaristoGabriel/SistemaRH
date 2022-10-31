import { Link, useParams } from "react-router-dom"
import styles from "../components/layout/Buscar.module.css"
import { Button } from "@mui/material"
import styleButton from "../components/layout/StyleButton.module.css"
import styleBotaoCheck from "../components/layout/BotaoCheck.module.css"
import { useLocation } from "react-router-dom"
import React, { useEffect, useState } from "react";


function Buscar() {
    const location = useLocation();
    const opcao = location.state;
    const selecionados = [];

    const [checkedState, setCheckedState] = useState(
        new Array(8).fill(false)
      );

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
            );
 
        setCheckedState(updatedCheckedState);
        for (let i = 0 ; i<updatedCheckedState.length; i++) {
            if(updatedCheckedState[i] == true)
                selecionados.push(i.toString());
        }
        console.log(selecionados);
    }

    return (
        <buscar className="App">
            <header className="App-header">
                Buscar
            </header>
            <br></br>
            <h2 className={styles.h2}>
                Como deseja buscar o funcionário?
            </h2>
            <div className={styles.menu}>
                <label className={styles.label}>
                    <input className={styleBotaoCheck.input} type="checkbox" name = "check" value = "nome"
                    onChange={() => handleOnChange(0)}></input>
                    <span className={styleBotaoCheck.checkbox}></span>
                    <p className={styles.text}>Nome</p>
                </label> <br></br>
                <label className={styles.label}>
                    <input className={styleBotaoCheck.input} type="checkbox" name = "check" value = "CPF"
                    onChange={() => handleOnChange(1)}></input>
                    <span className={styleBotaoCheck.checkbox}></span>
                    <p className={styles.text}>CPF</p>
                </label><br></br>
                <label className={styles.label}>
                    <input className={styleBotaoCheck.input} type="checkbox" name = "check" value = "nome"
                    onChange={() => handleOnChange(2)}></input>
                    <span className={styleBotaoCheck.checkbox}></span>
                    <p className={styles.text}>Cargo</p>
                </label><br></br>
                <label className={styles.label}>
                    <input className={styleBotaoCheck.input} type="checkbox" name = "check" value = "nome"
                    onChange={() => handleOnChange(3)}></input>
                    <span className={styleBotaoCheck.checkbox}></span>
                    <p className={styles.text}>Salário</p>
                </label><br></br>
                <label className={styles.label}>
                    <input className={styleBotaoCheck.input} type="checkbox" name = "check" value = "nome"
                    onChange={() => handleOnChange(4)}></input>
                    <span className={styleBotaoCheck.checkbox}></span>
                    <p className={styles.text}>Sexo</p>
                </label><br></br>
                <label className={styles.label}>
                    <input className={styleBotaoCheck.input} type="checkbox" name = "check" value = "nome"
                    onChange={() => handleOnChange(5)}></input>
                    <span className={styleBotaoCheck.checkbox}></span>
                    <p className={styles.text}>E-mail</p>
                </label> <br></br>
                <label className={styles.label}>
                    <input className={styleBotaoCheck.input} type="checkbox" name = "check" value = "nome"
                    onChange={() => handleOnChange(6)}></input>
                    <span className={styleBotaoCheck.checkbox}></span>
                    <p className={styles.text}>Data de Nascimento</p>
                </label> <br></br>
                <label className={styles.label}>
                    <input className={styleBotaoCheck.input} type="checkbox" name = "check" value = "nome"
                    onChange={() => handleOnChange(7)}></input>
                    <span className={styleBotaoCheck.checkbox}></span>
                    <p className={styles.text}>Tudo</p>
                </label> <br></br>
            </div>
            {opcao == "excluir" && <Link to = {"/pesquisa" + selecionados} state = {opcao} className={styleButton.button}>Pesquisar</Link>}
            {opcao == "editar" && <Link to = "/pesquisa" state = {opcao} className={styleButton.button}>Pesquisar</Link>}
            {opcao == "buscar" && <Link to = "/pesquisa" state = {opcao} className={styleButton.button}>Pesquisar</Link>}
            {opcao == "analisar" && <Link to = "/pesquisa" state = {opcao} className={styleButton.button}>Pesquisar</Link>}
            <Button class={styleButton.button} href="/menu" size="medium">Voltar</Button>
        </buscar>
    )
}

export default Buscar