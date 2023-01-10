import { Conteiner as CabecalhoContainer, Logo } from "../components/layout/Cabecalho.style";
import logo from '../Grupo3.png';
import style from "../index.css"
const Cabecalho = () => {
    return (
        <CabecalhoContainer>
            <div>
                <Logo className={style.logo} src={logo} alt="Logo"></Logo>
            </div>
        </CabecalhoContainer>
    )
}



export default Cabecalho