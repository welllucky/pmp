//components
import Cabecalho from "../../components/cabecalho"
import BarraPesquisa from "../../components/barraDePesquisa"
import Button from "../../components/button"

//css
import '../../assets/css/text.css'
import './App.css'

//img
import addUser from "../../assets/icons/addUser.png"
import Table from "../../components/tabela"
import { Item } from "../../components/tabela"

export default function App(){
    return(
        <div className="flex-container">
            <header>
                <Cabecalho />
            </header>
            <main className="content">
                <div className="head-content">
                    <div className="head-content-left">
                        <div className="session-info">
                            <h1>Gerenciador de usuários</h1>
                            <div className="line"></div>
                            <h6 className="usuarios-cadastrados">00 usuários</h6>
                        </div>
                        <img className="addUser" src={addUser}/>
                    </div>
                    <BarraPesquisa/>
                </div>
                <div className="body-content">
                    <table className="table-content">
                        <Table/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        
                    </table>
                </div>
            </main>
        </div>
    )
}