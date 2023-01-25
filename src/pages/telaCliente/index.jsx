//CSS
import './style.css'
import '../../assets/css/text.css'
import '../../assets/css/button.css'
import '../../assets/css/global.css'

//IMG
import edit from '../../assets/icons/edit.png'
import lock from '../../assets/icons/lock.png'
import mail from '../../assets/icons/mail.png'
import pswReset from '../../assets/icons/psw-reset.png'
import trash from '../../assets/icons/trash.png'

//componentes
import Cabecalho from '../../components/cabecalho/index'
import { BackButton } from '../../components/button'
import Display from '../../components/display'

function TelaCliente(){
    return (
    <div className='flex-container'>
    <header>
                <Cabecalho></Cabecalho>
    </header>
    <BackButton></BackButton>
    <main className='user-content'>
        <h1 className='username'>Nome do usuário</h1>
        <div className='content'>
        <div className='informacoes'>
            <h2>Informações</h2>
            <div className='data'>
                <div className='part-1'>
                <Display title="ID" data="999.999-99"/>
                <Display title="Data de nascimento" data="24/11/2002"/>
                <Display title="Equipe" data="FCx Labs"/>
                <Display title="Cargo" data="Software Engineer"/>
                </div>
                <div className='part-2'>
                <Display title="Unidade" data="Ibiribeira (Corporativo)"/>
                <Display title="Data de nascimento" data="00/00/0000"/>
                <Display title="Tempo de serviço" data="1 mês"/>
                </div>
            </div>
        </div>
        <div className='contato'>
            <h2>contato</h2>
            <div className='data'>
                <div className='part-1'>

                    <div className='item'>
                    <h4 className='email-title'>email</h4>
                    <p className='email-data'>loremipsum@ferreiracosta.com</p>
                    </div>

                    <div className='item'>
                    <h4 className='celular-title'>celular</h4>
                    <p className='id-data'>(81) 9 9999-9999</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='status'>
            <h2>status</h2>
            <div className='data-0'>

                <div className='item'>
                    <h4 className='condicao-title'>condição</h4>
                    <p className='codicao-data'>ativo</p>
                    </div>

                <div className='item'>
                    <h4 className='ultima-vez-atv-title'>última vez ativo</h4>
                    <p className='ultima-vez-atv-data'>00:00 00/00/0000</p>
                    </div>
            </div>
            </div>
            </div>
        </main>
    </div>)
    
}

export default TelaCliente;