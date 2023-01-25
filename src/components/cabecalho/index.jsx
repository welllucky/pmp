//imgs
import logo from '../../assets/imgs/logo.png';
import userPhoto from '../../assets/icons/user.png';

//css
import './style.css'
import '../../assets/css/text.css'

export default function cabecalho(){
    return(
        <div className="cabecalho">
                    <img src={logo} alt="logo ferreira costa" className="logo" />
                    <div className="usuario-ref">
                        <img className="foto-usuario" src={userPhoto} alt=""/>
                        <h4>Nome do Usuário</h4>
                    </div>
                </div>
    )
}