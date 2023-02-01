//components
import Cabecalho from "../../components/cabecalho"
import BarraPesquisa from "../../components/barraDePesquisa"
// eslint-disable-next-line no-unused-vars
import IconButton from "../../components/button"

import React from 'react'

//css
import '../../assets/css/text.css'
import './style.css'
import '../../assets/css/scroll.css'

//img
import addUser from "../../assets/icons/addUser.png"
import Table from "../../components/tabela"

export default function App(){
    return(
        <div className="flex-container">
            <Cabecalho className="cabecalho" type="logged" position="fixed"/>
            <main className="content">
                <div className="head-content">
                    <div className="head-content-left">
                        <div className="session-info">
                            <h1>Gerenciador de usuários</h1>
                            <div className="line"></div>
                            <h4 className="usuarios-cadastrados">00 usuários</h4>
                        </div>
                        <a href="" target="_blank">
                        <img className="addUser" src={addUser} />
                        </a>
                    </div>
                    <BarraPesquisa/>
                </div>
                <div className="body-content">
                    <table className="table">
                        <Table/>
                        
                    </table>
                </div>
            </main>
        </div>
    )
}