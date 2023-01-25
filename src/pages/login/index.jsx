import './style.css'
import '../../assets/css/text.css'
import '../../assets/css/global.css'

import Cabecalho from '../../components/cabecalho/index'


export default function login(){
    return(
        <div className="flex-container-login">
            <Cabecalho type="noLogged" position="relative"/>
            <main className="content-login">
                <div className="box-auth">
                    <div className="body-content-login">
                        <h2>Seja bem vindo(a)!</h2>
                        <div className="data-inputs">
                            <div className="email-input">
                                <p className="email">Email</p>
                                <input type="email" name="email" id="email" />
                            </div>
                            <div className="psw">
                                <p className='psw'>Senha</p>
                                <input type="password" name="password" id="password" />
                            </div>
                        </div>
                        <div className="psw-fogother"><span>Esqueci a senha</span></div>
                    </div>
                    <div className="button-entrace"><button type="submit"></button></div>
                </div>
            </main>
        </div>
    )
}