import { Link } from "react-router-dom"
import styles from "../components/layout/Relatorio.module.css"
import styleButton from "../components/layout/StyleButton.module.css"
import { Button } from "@mui/material"
import React, { useState } from "react";

function Relatorio() {
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
    }

    return (
        <div className="App">
            <header className="App-header">
                Relatório
            </header>
            <br></br>
            <h2 className={styles.h2}>
                Quais itens você quer no relatório?
            </h2>
            <div className={styles.menu}>
                <input className={styles.input} onChange={handleChange}  type="checkbox" name="check" value="Nome"></input>
                <p className={styles.text}>Nome</p>
                <input className={styles.input} onChange={handleChange}  type="checkbox" name="check" value="Cpf"></input>
                <p className={styles.text}>CPF</p>
                <input className={styles.input} onChange={handleChange}  type="checkbox" name="check" value="Sexo"></input>
                <p className={styles.text}>Sexo</p>
                <input className={styles.input} onChange={handleChange}  type="checkbox" name="check" value="Cidade"></input>
                <p className={styles.text}>Cidade</p>
                <input className={styles.input} onChange={handleChange}  type="checkbox" name="check" value="Email"></input>
                <p className={styles.text}>Email</p>
                <input className={styles.input} onChange={handleChange}  type="checkbox" name="check" value="Tudo"></input>
                <p className={styles.text}>Tudo</p>
            </div>
            <Link to="/gerado" className={styleButton.button}>Gerar Relatório</Link>
            <Button class={styleButton.button} href="/menu" size="medium">Voltar</Button>
        </div>
    )
}

export default Relatorio