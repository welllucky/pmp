import './style.css'
import '../../assets/css/text.css'

import back from '../../assets/icons/back.png'

export default function button(props){
    return(
        <div className="button">
            <a href={props.href}>
                <img src={props.img} alt=""/>
            </a>
        </div>
    )
}

export function BackButton(){
    return(
        <div className='back-button'>
            <img src={back}></img>
            <h4>voltar</h4>
    </div>
    )
}