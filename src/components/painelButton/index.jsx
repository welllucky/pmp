import './style.css'
import Button from '../button'

export default function painelButton(props){
    return(
        <div className="painelButton">
            <div className="bt1" type="button">
                <Button img={props.bt1.img}/>
                <h4>props.bt1.label</h4>
            </div>
            <div className="bt2" type="button">
                <Button img={props.bt2.img}/>
                <h4>props.bt2.label</h4>
            </div>
            <div className="bt3" type="button">
                <Button img={props.bt3.img}/>
                <h4>props.bt3.label</h4>
            </div>
            <div className="bt4" type="button">
                <Button img={props.bt4.img}/>
                <h4>props.bt4.label</h4>
            </div>
            <div className="bt5" type="button">
                <Button img={props.bt5.img}/>
                <h4>props.bt5.label</h4>
            </div>
        </div>
    )
}