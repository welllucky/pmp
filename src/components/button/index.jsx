import './style.css'
import '../../assets/css/text.css'

export default function button({img}){
    return(
        <div className="button">
            <img src={img} alt=""/>
        </div>
    )
}