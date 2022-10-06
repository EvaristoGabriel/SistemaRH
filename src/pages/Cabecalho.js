import { Conteiner as CabecalhoContainer, Logo } from "../components/layout/Cabecalho.style";
import logo from '../Grupo3.png';

const Cabecalho = () => {
    return (
        <CabecalhoContainer>
            <div>
                <Logo src={logo} alt="Logo"></Logo>
            </div>
        </CabecalhoContainer>
    )
}



export default Cabecalho