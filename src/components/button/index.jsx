/* eslint-disable react/prop-types */
import "./style.css";
import "../../assets/css/text.css";

import back from "../../assets/icons/back.png";
import { Link } from "react-router-dom";
import React from 'react'

export default function iconButton({ href, img, size = "1rem" }) {
  return (
    <div className="iconButton">
      <a href={href}>
        <img src={img} alt="" style={{ height: size, width: size }} />
      </a>
    </div>
  );
}

export function BackButton(path = "../") {
  return (
    <>
      <Link to={path}>
        {" "}
        <div className="back-Button">
          <img src={back} alt=""></img>
          <h4>voltar</h4>
        </div>
      </Link>
    </>
  );
}

export function Button({ placeholder, type = "submit" }) {
  return (
    <div className="button">
      <button type={type} id="button">
        {placeholder}
      </button>
    </div>
  );
}
