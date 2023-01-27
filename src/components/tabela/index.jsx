//css
import './style.css'
import '../../assets/css/text.css'
import '../../assets/css/scroll.css'

//img
import lock from '../../assets/icons/lock.svg'
import edit from '../../assets/icons/edit.png'
import { NavLink } from 'react-router-dom'

export default function Table(){
    return(
        <div className='table-content'>
            <ul className='table-titles'>
            <li><table-title-text>ID</table-title-text></li>
            <li><table-title-text>usuário</table-title-text></li>
            <li><table-title-text>cargo</table-title-text></li>
            <li><table-title-text>equipe</table-title-text></li>
            <li><table-title-text>unidade</table-title-text></li>
            <li alter="true"><table-title-text >registro</table-title-text></li>
            </ul>
            <div className='content-box'>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
        </div>
    )
}

export function Item(){
    return(
        <NavLink to="/usuario"> <div className='table-itens'> 
           <ul className='data'>
                <li data="id"><info-item-text>9999</info-item-text></li>
                <li data="user"><info-item-text>joão barros</info-item-text></li>
                <li data="job"><info-item-text>Engenheiro</info-item-text></li>
                <li data="team"><info-item-text>Planejamento</info-item-text></li>
                <li data="unity"><info-item-text>Ibiribeira</info-item-text></li>
                <li data="latest-acess"><info-item-text>22:00 22/12/2023</info-item-text></li>
            </ul> 
            <div className='tools-box'>
                <button-icon-v2><img src={lock} alt="botão de bloquear usuário"></img></button-icon-v2>
                <button-icon-v2><img src={edit} alt="botão de editar informações do usuário"></img></button-icon-v2>
            </div>
        </div></NavLink>
    )
}