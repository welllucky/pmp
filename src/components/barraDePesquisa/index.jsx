//css
import './style.css'
import '../../assets/css/text.css'

import React from 'react'

import search from '../../assets/icons/search.png'




export default function barraPesquisa(){
    return(
        <div className="search-bar">
            <img className='search-icon' src={search} alt="ícone de pesquisa" />
            <input type="search" placeholder="Digite o que você deseja buscar..." />
        </div>
    )
}