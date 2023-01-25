//imgs
import logo from '../../assets/imgs/logo.png';
import userPhoto from '../../assets/icons/user.png';
import lock from '../../assets/icons/lock.svg';

//css
import './style.css'
import '../../assets/css/text.css'

export default function Cabecalho({type, position}){
    if (type == 0 || type == 'logged'){
        return(
            <header style={{position: position}}>
            <div className="cabecalho">
                        <img src={logo} alt="logo ferreira costa" className="logo" />
                        <div className="usuario-ref">
                            <img className="foto-usuario" src={userPhoto} alt=""/>
                            <h4>Nome do Usuário</h4>
                        </div>
                    </div>
            </header>
        )
    }
   else if (type == 1 || type == 'noLogged'){
        return(
            <header style={{position:position}}>
            <div className="cabecalho">
                        <img src={logo} alt="logo ferreira costa" className="logo" />
                        <div className="security">
                            <img className="lock-icon" src={lock} alt=""/>
                            <h4>Página Segura</h4>
                        </div>
                    </div>
            </header>
        )
    } else{
        alert('Valor digitado em <Cabecalho/> inválido!')
    }
}