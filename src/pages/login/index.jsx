import './style.css'
import '../../assets/css/text.css'
import '../../assets/css/global.css'

import Cabecalho from '../../components/cabecalho/index'
import Input from '../../components/inputs'
import { Button } from '../../components/button'
import search from '../../assets/icons/search.png'


export default function login() {
    return (
        <div className="flex-container-login">
            <Cabecalho type="noLogged" position="relative" />
            <main className="content-login">
                <div className="box-auth">
                    <div className="body-content-login">
                        <h2>Seja bem vindo(a)!</h2>
                        <div className="user-content-login">
                            <div className="data-inputs">
                                <Input name="Email" type="email" placeholder="Digite seu email" />
                                <Input name="Senha" type='psw' placeholder="Digite sua senha" />
                            </div>
                            <div className="psw-fogother"><h4>Esqueci a senha</h4></div>
                        </div>
                    </div>
                    <Button placeholder="Entrar" />
                </div>
            </main>
        </div>
    )
}