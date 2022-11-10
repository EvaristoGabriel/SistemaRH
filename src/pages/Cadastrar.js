import { Link } from "react-router-dom"
import styles from "../components/layout/Cadastrar.module.css"
import { Button } from "@mui/material"
import styleButton from "../components/layout/StyleButton.module.css"
import styleBotaoCheck from "../components/layout/BotaoCheck.module.css"
import React, { useState } from "react";

function cadastro(valor, id, userinfo, setUserInfo, dependentes, setDependentes, seguro,
    setSeguro, primeiro, setPrimeiro, vale, setVale, outro, setOutro) {

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
    const ChangeOpcPrimeiro = (e) => {
        setPrimeiro(e.target.value)
    }
    const ChangeOpcDependentes = (e) => {
        setDependentes(e.target.value)
    }
    const ChangeOpcVale = (e) => {
        setVale(e.target.value)
    }
    const ChangeOpcOutro = (e) => {
        setOutro(e.target.value)
    }
    const ChangeOpcSeguro = (e) => {
        setSeguro(e.target.value)
    }
    if (id <= 36)
        return (
            <div className={styles.menu}>
                {id == 1 && <h1 className={styles.h1i}>Informações Pessoais</h1>}
                {id == 13 && <h1 className={styles.h1e}>Endereço</h1>}
                {id == 20 && <h1 className={styles.h1r}>RG</h1>}
                {id == 23 && <h1 className={styles.h1c}>Carteira Habilitação</h1>}
                {id == 26 && <h1 className={styles.h1t}>Título de Eleitor</h1>}
                {id == 29 && <h1 className={styles.h1ct}>CTPS</h1>}
                {id == 33 && <h1 className={styles.h1p}>PIS</h1>}
                {id == 35 && <h1 className={styles.h1ce}>Certidão Militar</h1>}
                <form key={valor}>
                    <input name="name" autoComplete="off" required className={styles.input} />
                    <label className={styles.label} htmlFor="name">
                        <span className={styles.span}>{valor}</span>
                    </label>
                </form>
            </div>
        )
    if ((id >= 37 && id < 40) || (id > 40)) {
        return (
            <div className={styles.menu}>
                <form key={valor}>
                    {id == 37 && <div>
                        <p className={styles.h1pr}>{valor}</p>
                        <label className={styles.labelcheck}>
                            <input className={styleBotaoCheck.input} type="radio" name="check" value="Sim"
                                onChange={ChangeOpcPrimeiro}></input>
                            <span className={styleBotaoCheck.checkbox}></span>
                            <p className={styles.text}>Sim</p>
                        </label>
                        <label className={styles.labelcheck2}>
                            <input className={styleBotaoCheck.input} type="radio" name="check" value="Não"
                                onChange={ChangeOpcPrimeiro}></input>
                            <span className={styleBotaoCheck.checkbox}></span>
                            <p className={styles.text}>Não</p>
                        </label> <br></br><br></br><br></br><br></br><br></br><br></br>
                        {primeiro == "Sim" && <div>
                            <form key={valor}>
                                <input name="name" autoComplete="off" required className={styles.input} />
                                <label className={styles.label} htmlFor="name">
                                    <span className={styles.span}>data emprego</span>
                                </label>
                            </form>
                        </div>}
                    </div>}
                    {id == 38 && <div>
                        <p className={styles.h1pe}>{valor}</p>
                        <label className={styles.labelcheck}>
                            <input className={styleBotaoCheck.input} type="radio" name="check" value="Sim"
                                onChange={ChangeOpcOutro}></input>
                            <span className={styleBotaoCheck.checkbox}></span>
                            <p className={styles.text}>Sim</p>
                        </label>
                        <label className={styles.labelcheck2}>
                            <input className={styleBotaoCheck.input} type="radio" name="check" value="Não"
                                onChange={ChangeOpcOutro}></input>
                            <span className={styleBotaoCheck.checkbox}></span>
                            <p className={styles.text}>Não</p>
                        </label>
                    </div>}
                    {id == 39 && <div>
                        <p className={styles.h1pe}>{valor}</p>
                        <label className={styles.labelcheck}>
                            <input className={styleBotaoCheck.input} type="radio" name="check" value="Sim"
                                onChange={ChangeOpcSeguro}></input>
                            <span className={styleBotaoCheck.checkbox}></span>
                            <p className={styles.text}>Sim</p>
                        </label>
                        <label className={styles.labelcheck2}>
                            <input className={styleBotaoCheck.input} type="radio" name="check" value="Não"
                                onChange={ChangeOpcSeguro}></input>
                            <span className={styleBotaoCheck.checkbox}></span>
                            <p className={styles.text}>Não</p>
                        </label>
                    </div>}
                    {id == 41 && <div>
                        <p className={styles.h1pe}>{valor}</p>
                        <label className={styles.labelcheck}>
                            <input className={styleBotaoCheck.input} type="radio" name="check" value="Sim"
                                onChange={ChangeOpcVale}></input>
                            <span className={styleBotaoCheck.checkbox}></span>
                            <p className={styles.text}>Sim</p>
                        </label>
                        <label className={styles.labelcheck2}>
                            <input className={styleBotaoCheck.input} type="radio" name="check" value="Não"
                                onChange={ChangeOpcVale}></input>
                            <span className={styleBotaoCheck.checkbox}></span>
                            <p className={styles.text}>Não</p>
                        </label>
                    </div>
                    }
                    {id == 42 && <div>
                        <p className={styles.h1pe}>{valor}</p>
                        <label className={styles.labelcheck}>
                            <input className={styleBotaoCheck.input} type="radio" name="check" value="Sim"
                                onChange={ChangeOpcDependentes}></input>
                            <span className={styleBotaoCheck.checkbox}></span>
                            <p className={styles.text}>Sim</p>
                        </label>
                        <label className={styles.labelcheck2}>
                            <input className={styleBotaoCheck.input} type="radio" name="check" value="Não"
                                onChange={ChangeOpcDependentes}></input>
                            <span className={styleBotaoCheck.checkbox}></span>
                            <p className={styles.text}>Não</p>
                        </label><br></br><br></br><br></br><br></br><br></br><br></br>
                        {dependentes == "Sim" && <div>
                            <form key="dependentes.nome">
                                <input name="name" autoComplete="off" required className={styles.input} />
                                <label className={styles.label} htmlFor="name">
                                    <span className={styles.span}>Nome</span>
                                </label>
                            </form>
                            <form key="dependentes.nascimento">
                                <input name="name" autoComplete="off" required className={styles.input} />
                                <label className={styles.label} htmlFor="name">
                                    <span className={styles.span}>data nascimento</span>
                                </label>
                            </form>
                        </div>}
                    </div>
                    }
                </form>
            </div>
        )
    }
    if (id == 40) {
        return (
            <div className={styles.menu}>
                <form key={valor}>
                    <p className={styles.h1val}>{valor}</p>
                    <label className={styles.labelcheck}>
                        <input className={styleBotaoCheck.input} type="checkbox" name="check" value="Alimentação"
                            onChange={handleChange}></input>
                        <span className={styleBotaoCheck.checkbox}></span>
                        <p className={styles.text}>Alimentação</p>
                    </label>
                    <label className={styles.labelcheck2}>
                        <input className={styleBotaoCheck.input} type="checkbox" name="check" value="Refeição"
                            onChange={handleChange}></input>
                        <span className={styleBotaoCheck.checkbox}></span>
                        <p className={styles.text}>Refeição</p>
                    </label>
                </form>
            </div>
        )
    }
}

function Cadastrar() {
    let selecionados = [];

    const [userinfo, setUserInfo] = useState({
        languages: [],
        response: [],
    });

    selecionados = selecionados.concat(userinfo.languages)
    const [primeiro, setPrimeiro] = useState(true);
    const [outro, setOutro] = useState(true);
    const [vale, setVale] = useState(true);
    const [dependentes, setDependentes] = useState(true);
    const [seguro, setSeguro] = useState(true);

    selecionados.push(primeiro)
    selecionados.push(outro)
    selecionados.push(seguro)
    selecionados.push(vale)
    selecionados.push(dependentes)
    console.log(selecionados)
    const campos = [
        { id: 1, text: "Nome" },
        { id: 2, text: "Data de Nascimento" },
        { id: 3, text: "Nacionalidade" },
        { id: 4, text: "Naturalidade" },
        { id: 5, text: "Grau de Instrução" },
        { id: 6, text: "Estado Civil" },
        { id: 7, text: "Sexo" },
        { id: 8, text: "Raça" },
        { id: 9, text: "Filiação" },
        { id: 10, text: "CPF" },
        { id: 11, text: "E-mail" },
        { id: 12, text: "Tipo Sanguíneo" },
        { id: 13, text: "Bairro" }, //Endereço
        { id: 14, text: "Cidade" },
        { id: 15, text: "Nº Residencia" },
        { id: 16, text: "UF" },
        { id: 17, text: "CEP" },
        { id: 18, text: "Telefone" },
        { id: 19, text: "País" },
        { id: 20, text: "Orgao Emissor" }, //RG
        { id: 21, text: "UF Emissao" },
        { id: 22, text: "Data Emissao" },
        { id: 23, text: "Categoria" }, //Carteira de habilitação
        { id: 24, text: "Numero" },
        { id: 25, text: "Vencimento" },
        { id: 26, text: "Zona" }, //Título de eleitor
        { id: 27, text: "Seção" },
        { id: 28, text: "Número" },
        { id: 29, text: "Número" }, // Carteira de Trabalho
        { id: 30, text: "Série" },
        { id: 31, text: "UF" },
        { id: 32, text: "Emissao" },
        { id: 33, text: "Número" }, //PIS
        { id: 34, text: "Emissao" },
        { id: 35, text: "Número" }, //Militar
        { id: 36, text: "Emissao" },
        { id: 37, text: "Primeiro Emprego" }, //Empregos
        { id: 38, text: "Possui outro vinculo empregatício?" },
        { id: 39, text: "Está recebendo seguro desemprego?" },
        { id: 40, text: "Qual vale deseja receber" },
        { id: 41, text: "Necessita de Vale Transporte?" },
        { id: 42, text: "Possui dependentes?" },
    ];
    return (
        <div className="App">
            <header className="App-header">
                Cadastro
            </header>
            <br></br>
            <div className={styles.campos}>
                {campos.map((campo) => (
                    cadastro(campo.text, campo.id, userinfo, setUserInfo, dependentes, setDependentes, seguro,
                        setSeguro, primeiro, setPrimeiro, vale, setVale, outro, setOutro)
                ))}

            </div>
            <br></br>
            <Link to={"/menu"} className={styleButton.button}>Cadastrar</Link>
            <Button class={styleButton.button} href="/menu" size="small">Voltar</Button>
        </div>
    )
}

export default Cadastrar