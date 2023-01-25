import './style.css'
import '../../assets/css/text.css'

import back from '../../assets/icons/back.png'

export default function button({img}){
    return(
        <div className="button">
            <img src={img} alt=""/>
        </div>
    )
}

export function BackButton(){
    return(
        <div className='back-button'>
            <img src={back}></img>
            <h3>voltar</h3>
    </div>
    )
}