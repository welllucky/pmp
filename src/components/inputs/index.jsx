//CSS
import './style.css'
import '../../assets/css/text.css'

//IMG
import show from '../../assets/icons/show.svg'
import hidden from '../../assets/icons/hidden.svg'

export default function input({ name, type = 'default', placeholder, icon1 = "", icon2 = "" }) {
    if (type === "default" || type === "email") {
        console.log('name tá pegando')
        return (
            <div className={name + "-input"} id="input">
                <h4 className="email">{name}</h4>
                <div className="input-field">
                    <input type={type} name={name} placeholder={placeholder} />
                </div>
            </div>
        )
    }
    else if (type === "psw" || type === "password") {
        console.log("senha tá pegando")
        return (
            <div className={name + "-input"} id="input">
                <h4 className="email">{name}</h4>
                <div className="input-field">
                    <input type={type} name={name} placeholder={placeholder} />
                    <div className="mask-psw">
                        <img src={show} alt="mostrar senha" />
                    </div>
                </div>
            </div>
        )
    }

}