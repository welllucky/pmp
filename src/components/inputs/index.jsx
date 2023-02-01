/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

//CSS
import "./style.css";
import "../../assets/css/text.css";

//IMG
import show from "../../assets/icons/show.svg";
// eslint-disable-next-line no-unused-vars
import hidden from "../../assets/icons/hidden.svg";

function Email({ name, type = "default", placeholder }) {
    return (
      <div className={name + "-input"} id="input">
        <h4 className="email">{name}</h4>
        <div className="input-field">
          <input type={type} name={name} placeholder={placeholder} />
        </div>
      </div>
    );
  }
  
  function Psw({ name, type = "default", placeholder }) {

    
    const [MaskIcon, setMaskIcon] = useState(show)
    const [hide, setHide] = useState(true)

    function changeIcon(){
      setMaskIcon(MaskIcon === show ? hidden : show)
      setHide(!hide)
    }
  
    return (
      <div className={name + "-input"} id="input">
        <h4 className="email">{name}</h4>
        <div className="input-field">
          <input type={hide ? "password" : "text"} name={name} placeholder={placeholder} />
          <div onClick={changeIcon} className="mask-">
            <img src={MaskIcon} alt="mostrar senha" />
          </div>
        </div>
      </div>
    );
  }

export default {Email, Psw};
