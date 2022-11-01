import { Link, useParams } from "react-router-dom"
import styles from "../components/layout/Buscar.module.css"
import { Button } from "@mui/material"
import styleButton from "../components/layout/StyleButton.module.css"
import styleBotaoCheck from "../components/layout/BotaoCheck.module.css"
import { useLocation } from "react-router-dom"
import React, { useRef, useState } from "react";


function Buscar() {
    const location = useLocation();
    const opcao = location.state;
    let selecionados = [opcao];

    const [userinfo, setUserInfo] = useState({
        languages: [],
        response: [],
      });

    const handleChange = (e) => {
        const { value, checked } = e.target;
        const { languages } = userinfo;
          
        console.log(`${value} is ${checked}`);
        // Case 1 : The user checks the box
        if (checked) {
            setUserInfo({
                languages: [...languages, value],
                response: [...languages, value],
            });
        }
        
        // Case 2  : The user unchecks the box
        else {
            setUserInfo({
                languages: languages.filter((e) => e !== value),
                response: languages.filter((e) => e !== value),
            });
        }
    };
    selecionados = selecionados.concat(userinfo.languages)
    console.log(selecionados);

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
                    onChange={handleChange}></input>
                    <span className={styleBotaoCheck.checkbox}></span>
                    <p className={styles.text}>Nome</p>
                </label> <br></br>
                <label className={styles.label}>
                    <input className={styleBotaoCheck.input} type="checkbox" name = "check" value = "cpf"
                    onChange={handleChange}></input>
                    <span className={styleBotaoCheck.checkbox}></span>
                    <p className={styles.text}>CPF</p>
                </label><br></br>
                <label className={styles.label}>
                    <input className={styleBotaoCheck.input} type="checkbox" name = "check" value = "cargo"
                    onChange={handleChange}></input>
                    <span className={styleBotaoCheck.checkbox}></span>
                    <p className={styles.text}>Cargo</p>
                </label><br></br>
                <label className={styles.label}>
                    <input className={styleBotaoCheck.input} type="checkbox" name = "check" value = "salario"
                    onChange={handleChange}></input>
                    <span className={styleBotaoCheck.checkbox}></span>
                    <p className={styles.text}>Salário</p>
                </label><br></br>
                <label className={styles.label}>
                    <input className={styleBotaoCheck.input} type="checkbox" name = "check" value = "sexo"
                    onChange={handleChange}></input>
                    <span className={styleBotaoCheck.checkbox}></span>
                    <p className={styles.text}>Sexo</p>
                </label><br></br>
                <label className={styles.label}>
                    <input className={styleBotaoCheck.input} type="checkbox" name = "check" value = "email"
                    onChange={handleChange}></input>
                    <span className={styleBotaoCheck.checkbox}></span>
                    <p className={styles.text}>E-mail</p>
                </label> <br></br>
                <label className={styles.label}>
                    <input className={styleBotaoCheck.input} type="checkbox" name = "check" value = "nascimento"
                    onChange={handleChange}></input>
                    <span className={styleBotaoCheck.checkbox}></span>
                    <p className={styles.text}>Data de Nascimento</p>
                </label> <br></br>
                <label className={styles.label}>
                    <input className={styleBotaoCheck.input} type="checkbox" name = "check" value = "tudo"
                    onChange={handleChange}></input>
                    <span className={styleBotaoCheck.checkbox}></span>
                    <p className={styles.text}>Tudo</p>
                </label> <br></br>
            </div>
            {opcao == "excluir" && <Link to = {"/pesquisa"} state = {selecionados} className={styleButton.button}>Pesquisar</Link>}
            {opcao == "editar" && <Link to = "/pesquisa" state = {opcao} className={styleButton.button}>Pesquisar</Link>}
            {opcao == "buscar" && <Link to = "/pesquisa" state = {opcao} className={styleButton.button}>Pesquisar</Link>}
            {opcao == "analisar" && <Link to = "/pesquisa" state = {opcao} className={styleButton.button}>Pesquisar</Link>}
            <Button class={styleButton.button} href="/menu" size="medium">Voltar</Button>
        </buscar>
    )
}

export default Buscar