import { Link } from "react-router-dom"
import styles from "../components/layout/Cadastrar.module.css"
import { Button } from "@mui/material"
import styleButton from "../components/layout/StyleButton.module.css"
import styleBotaoCheck from "../components/layout/BotaoCheck.module.css"
import React, { useState } from "react";


function Cadastrar() {
    let selecionados = [];

    const [userinfo] = useState({
        languages: [],
        response: [],
    });

    selecionados = selecionados.concat(userinfo.languages)
    const [primeiro, setPrimeiro] = useState(false);
    const [outro, setOutro] = useState(false);
    const [vale, setVale] = useState(false);
    const [dependentes, setDependentes] = useState(false);
    const [seguro, setSeguro] = useState(false);
    const [refeicao, setRefeicao] = useState(false);

    selecionados.push(primeiro)
    selecionados.push(outro)
    selecionados.push(seguro)
    selecionados.push(vale)
    selecionados.push(dependentes)
    selecionados.push(refeicao)
    const [inputs, setInputs] = useState([
        { id: 1, value: "" },
        { id: 2, value: "" },
        { id: 3, value: "" },
        { id: 4, value: "" },
        { id: 5, value: "" },
        { id: 6, value: "" },
        { id: 7, value: "" },
        { id: 8, value: "" },
        { id: 9, value: "" },
        { id: 10, value: "" },
        { id: 11, value: "" },
        { id: 12, value: "" },
        { id: 13, value: "" },
        { id: 14, value: "" },
        { id: 15, value: "" },
        { id: 16, value: "" },
        { id: 17, value: "" },
        { id: 18, value: "" },
        { id: 19, value: "" },
        { id: 20, value: "" },
        { id: 21, value: "" },
        { id: 22, value: "" },
        { id: 23, value: "" },
        { id: 24, value: "" },
        { id: 25, value: "" },
        { id: 26, value: "" },
        { id: 27, value: "" },
        { id: 28, value: "" },
        { id: 29, value: "" },
        { id: 30, value: "" },
        { id: 31, value: "" },
        { id: 32, value: "" },
        { id: 33, value: "" },
        { id: 34, value: "" },
        { id: 35, value: "" },
        { id: 36, value: "" },
        { id: 37, value: "" },
        { id: 38, value: "" }, //Primeiro Emprego
        { id: 39, value: "" }, //Outro vinculo
        { id: 40, value: "" }, //Seguro desemprego
        { id: 41, value: "" }, //Vales
        { id: 42, value: "" }, //Vale transporte
        { id: 43, value: "" }, //Possui dependentes
    ]);

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
    const ChangeOpcRefeicao = (e) => {
        setRefeicao(e.target.value)
    }

    function handleInputChange(index, event) {
        const NovosInputs = [...inputs];
        NovosInputs[index].value = event.target.value;
        setInputs(NovosInputs);
    }
    function handleButtonClick() {
        const novosinputs = [...inputs];
            for (let i = 0; i < selecionados.length; i++)
                novosinputs[37 + i].value = selecionados[i];
            setInputs(novosinputs);
    }
    return (
        <div className="App">
            <header className="App-header">
                Cadastro
            </header>
            <br></br>
            <div className={styles.campos}>
                <form className={styles.form}>
                    <p className={styles.h1pe}>Informações Pessoais</p>
                    <input onChange={(e) => handleInputChange(0, e)} placeholder="Nome" type="text" className={styles.input} />
                    <input onChange={(e) => handleInputChange(1, e)} placeholder="Data de Nascimento" type="text" className={styles.input} />
                    <input onChange={(e) => handleInputChange(2, e)} placeholder="Nacionalidade" type="text" className={styles.input} />
                    <input onChange={(e) => handleInputChange(3, e)} placeholder="Naturalidade" type="text" className={styles.input} />
                    <input onChange={(e) => handleInputChange(4, e)} placeholder="Grau de Instrução" type="text" className={styles.input} />
                    <input onChange={(e) => handleInputChange(5, e)} placeholder="Estado Civil" type="text" className={styles.input} />
                    <input onChange={(e) => handleInputChange(6, e)} placeholder="Sexo" type="text" className={styles.input} />
                    <input onChange={(e) => handleInputChange(7, e)} placeholder="Raça" type="text" className={styles.input} />
                    <input onChange={(e) => handleInputChange(8, e)} placeholder="Filiação" type="text" className={styles.input} />
                    <input onChange={(e) => handleInputChange(9, e)} placeholder="CPF" type="text" className={styles.input} />
                    <input onChange={(e) => handleInputChange(10, e)} placeholder="E-mail" type="text" className={styles.input} />
                    <input onChange={(e) => handleInputChange(11, e)} placeholder="Tipo Sanguíneo" type="text" className={styles.input} />
                    <p className={styles.h1pe}>Endereço</p>
                    <input onChange={(e) => handleInputChange(12, e)} placeholder="Bairro" type="text" className={styles.input} />
                    <input onChange={(e) => handleInputChange(13, e)} placeholder="Cidade" type="text" className={styles.input} />
                    <input onChange={(e) => handleInputChange(14, e)} placeholder="Nº Residencia" type="text" className={styles.input} />
                    <input onChange={(e) => handleInputChange(15, e)} placeholder="UF" type="text" className={styles.input} />
                    <input onChange={(e) => handleInputChange(16, e)} placeholder="CEP" type="text" className={styles.input} />
                    <input onChange={(e) => handleInputChange(17, e)} placeholder="Telefone" type="text" className={styles.input} />
                    <input onChange={(e) => handleInputChange(18, e)} placeholder="País" type="text" className={styles.input} />
                    <p className={styles.h1pe}>RG</p>
                    <input onChange={(e) => handleInputChange(19, e)} placeholder="Orgão Emissor" type="text" className={styles.input} />
                    <input onChange={(e) => handleInputChange(20, e)} placeholder="UF Emissão" type="text" className={styles.input} />
                    <input onChange={(e) => handleInputChange(21, e)} placeholder="Data Emissão" type="text" className={styles.input} />
                    <p className={styles.h1pe}>Carteira de Habilitação</p>
                    <input onChange={(e) => handleInputChange(22, e)} placeholder="Categoria" type="text" className={styles.input} />
                    <input onChange={(e) => handleInputChange(23, e)} placeholder="Vencimento" type="text" className={styles.input} />
                    <p className={styles.h1pe}>Título de Eleitor</p>
                    <input onChange={(e) => handleInputChange(24, e)} placeholder="Zona" type="text" className={styles.input} />
                    <input onChange={(e) => handleInputChange(25, e)} placeholder="Seção" type="text" className={styles.input} />
                    <input onChange={(e) => handleInputChange(26, e)} placeholder="Número" type="text" className={styles.input} />
                    <p className={styles.h1pe}>Carteira de Trabalho</p>
                    <input onChange={(e) => handleInputChange(27, e)} placeholder="Número" type="text" className={styles.input} />
                    <input onChange={(e) => handleInputChange(28, e)} placeholder="Série" type="text" className={styles.input} />
                    <input onChange={(e) => handleInputChange(29, e)} placeholder="UF" type="text" className={styles.input} />
                    <input onChange={(e) => handleInputChange(30, e)} placeholder="Emissão" type="text" className={styles.input} />
                    <p className={styles.h1pe}>PIS</p>
                    <input onChange={(e) => handleInputChange(31, e)} placeholder="Número" type="text" className={styles.input} />
                    <input onChange={(e) => handleInputChange(32, e)} placeholder="Emissão" type="text" className={styles.input} />
                    <p className={styles.h1pe}>Militar</p>
                    <input onChange={(e) => handleInputChange(33, e)} placeholder="Número" type="text" className={styles.input} />
                    <input onChange={(e) => handleInputChange(34, e)} placeholder="Emissão" type="text" className={styles.input} />
                    <p className={styles.h1pe}>Primeiro Emprego?</p>
                    <input className={styleBotaoCheck.input} checked={primeiro === "Sim"} type="checkbox" name="check" value="Sim"
                        onChange={ChangeOpcPrimeiro}></input>
                    <p className={styles.text}>Sim</p>
                    <input className={styleBotaoCheck.input} checked={primeiro === "Não"} type="checkbox" name="check" value="Não"
                        onChange={ChangeOpcPrimeiro}></input>
                    <p className={styles.text}>Não</p>
                    <p className={styles.h1pe}>Possui outro vinculo empregatício?</p>
                    <input className={styleBotaoCheck.input} checked={outro === "Sim"} type="checkbox" name="check" value="Sim"
                        onChange={ChangeOpcOutro}></input>
                    <p className={styles.text}>Sim</p>
                    <input className={styleBotaoCheck.input} checked={outro === "Não"} type="checkbox" name="check" value="Não"
                        onChange={ChangeOpcOutro}></input>
                    <p className={styles.text}>Não</p>
                    <p className={styles.h1pe}>Está recebendo seguro desemprego?</p>
                    <input className={styleBotaoCheck.input} checked={seguro === "Sim"} type="checkbox" name="check" value="Sim"
                        onChange={ChangeOpcSeguro}></input>
                    <p className={styles.text}>Sim</p>
                    <input className={styleBotaoCheck.input} checked={seguro === "Não"} type="checkbox" name="check" value="Não"
                        onChange={ChangeOpcSeguro}></input>
                    <p className={styles.text}>Não</p>
                    <p className={styles.h1pe}>Qual vale deseja receber?</p>
                    <input className={styleBotaoCheck.input} checked={refeicao === "Alimentacao"}type="checkbox" name="check" value="Alimentacao"
                        onChange={ChangeOpcRefeicao}></input>
                    <p className={styles.textlongo}>Vale Alimentação</p>
                    <input className={styleBotaoCheck.input} checked={refeicao === "Refeicao"} type="checkbox" name="check" value="Refeicao"
                        onChange={ChangeOpcRefeicao}></input>
                    <p className={styles.textlongor}>Vale Refeição</p>
                    <p className={styles.h1pe}>Necessita de vale transporte?</p>
                    <input className={styleBotaoCheck.input} checked={vale === "Sim"} type="checkbox" name="check" value="Sim"
                        onChange={ChangeOpcVale}></input>
                    <p className={styles.text}>Sim</p>
                    <input className={styleBotaoCheck.input} checked={vale === "Não"} type="checkbox" name="check" value="Não"
                        onChange={ChangeOpcVale}></input>
                    <p className={styles.text}>Não</p>
                    <p className={styles.h1pe}>Possui dependentes?</p>
                    <input className={styleBotaoCheck.input} checked={dependentes === "Sim"} type="checkbox" name="check" value="Sim"
                        onChange={ChangeOpcDependentes}></input>
                    <p className={styles.text}>Sim</p>
                    <input className={styleBotaoCheck.input} checked={dependentes === "Não"} type="checkbox" name="check" value="Não"
                        onChange={ChangeOpcDependentes}></input>
                    <p className={styles.text}>Não</p>
                    <br></br>
                    {dependentes === "Sim" && <div>
                        <input onChange={(e) => handleInputChange(35, e)} placeholder="Nome dependente" type="text" className={styles.input} />
                        <input onChange={(e) => handleInputChange(36, e)} placeholder="Nascimento dependente" type="text" className={styles.input} />
                    </div>}
                </form>
            </div>
            <br></br>
            <Link to={"/menu"} className={styleButton.button} onClick={handleButtonClick}>Cadastrar</Link>
            <Button class={styleButton.button} href="/menu" size="small">Voltar</Button>
        </div>
    )
};

export default Cadastrar;