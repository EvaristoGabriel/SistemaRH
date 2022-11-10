import { Link, useParams } from "react-router-dom"
import styles from "../components/layout/Buscar.module.css"
import { Button } from "@mui/material"
import styleButton from "../components/layout/StyleButton.module.css"
import styleBotaoCheck from "../components/layout/BotaoCheck.module.css"
import { useLocation } from "react-router-dom"
import React, { useState } from "react";

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

        if (checked) {
            setUserInfo({
                languages: [...languages, value],
                response: [...languages, value],
            });
        }
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
        <div className="App">
            <header className="App-header">
                Buscar
            </header>
            <br></br>
            <h2 className={styles.h2}>
                Como deseja buscar o funcionário?
            </h2>
            <div className={styles.menu}>
                <label className={styles.label}>
                    <input className={styleBotaoCheck.input} type="checkbox" name="check" value="Nome"
                        onChange={handleChange}></input>
                    <span className={styleBotaoCheck.checkbox}></span>
                    <p className={styles.text}>Nome</p>
                </label> <br></br>
                <label className={styles.label}>
                    <input className={styleBotaoCheck.input} type="checkbox" name="check" value="Cpf"
                        onChange={handleChange}></input>
                    <span className={styleBotaoCheck.checkbox}></span>
                    <p className={styles.text}>CPF</p>
                </label><br></br>
                <label className={styles.label}>
                    <input className={styleBotaoCheck.input} type="checkbox" name="check" value="Cargo"
                        onChange={handleChange}></input>
                    <span className={styleBotaoCheck.checkbox}></span>
                    <p className={styles.text}>Cargo</p>
                </label><br></br>
                <label className={styles.label}>
                    <input className={styleBotaoCheck.input} type="checkbox" name="check" value="Salario"
                        onChange={handleChange}></input>
                    <span className={styleBotaoCheck.checkbox}></span>
                    <p className={styles.text}>Salário</p>
                </label><br></br>
                <label className={styles.label}>
                    <input className={styleBotaoCheck.input} type="checkbox" name="check" value="Sexo"
                        onChange={handleChange}></input>
                    <span className={styleBotaoCheck.checkbox}></span>
                    <p className={styles.text}>Sexo</p>
                </label><br></br>
                <label className={styles.label}>
                    <input className={styleBotaoCheck.input} type="checkbox" name="check" value="Email"
                        onChange={handleChange}></input>
                    <span className={styleBotaoCheck.checkbox}></span>
                    <p className={styles.text}>E-mail</p>
                </label> <br></br>
                <label className={styles.label}>
                    <input className={styleBotaoCheck.input} type="checkbox" name="check" value="Nascimento"
                        onChange={handleChange}></input>
                    <span className={styleBotaoCheck.checkbox}></span>
                    <p className={styles.text}>Data de Nascimento</p>
                </label> <br></br>
                <label className={styles.label}>
                    <input className={styleBotaoCheck.input} type="checkbox" name="check" value="Registro"
                        onClick={handleChange}></input>
                    <span className={styleBotaoCheck.checkbox}></span>
                    <p className={styles.text}>Registro</p>
                </label> <br></br>
            </div>
            {opcao == "excluir" && <Link to={"/pesquisa"} state={selecionados} className={styleButton.button}>Pesquisar</Link>}
            {opcao == "editar" && <Link to={"/pesquisa"} state={selecionados} className={styleButton.button}>Pesquisar</Link>}
            {opcao == "buscar" && <Link to={"/pesquisa"} state={selecionados} className={styleButton.button}>Pesquisar</Link>}
            {opcao == "analisar" && <Link to={"/pesquisa"} state={selecionados} className={styleButton.button}>Pesquisar</Link>}
            <Button class={styleButton.button} href="/menu" size="medium">Voltar</Button>
        </div>
    )
}

export default Buscar