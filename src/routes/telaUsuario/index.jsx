//CSS
import "./style.css";
import "../../assets/css/text.css";
import "../../assets/css/button.css";
import "../../assets/css/global.css";

//IMG
import edit from "../../assets/icons/edit.png";
import lock from "../../assets/icons/lock.svg";
import mail from "../../assets/icons/mail.png";
import pswReset from "../../assets/icons/psw-reset.png";
import trash from "../../assets/icons/trash.png";

//componentes
import Cabecalho from "../../components/cabecalho/index";
import { BackButton } from "../../components/button";
import Display from "../../components/display";

function TelaCliente() {
  return (
    <div className="flex-container">
      <Cabecalho className="cabecalho" type="logged" position="fixed" />
      <div className="stable-box">
        <main className="user-content">
          <BackButton />
          <h1 className="username">Nome do usuário</h1>
          <div className="content">
            <div className="session" name="informacoes">
              <h3>Informações</h3>
              <div className="data-session">
                <div className="part-1">
                  <Display title="ID" data="999.999-99" />
                  <Display title="Data de nascimento" data="24/11/2002" />
                  <Display title="Equipe" data="FCx Labs" />
                  <Display title="Cargo" data="Software Engineer" />
                </div>
                <div className="part-2">
                  <Display title="Unidade" data="Ibiribeira (Corporativo)" />
                  <Display title="Data de nascimento" data="00/00/0000" />
                  <Display title="Tempo de serviço" data="1 mês" />
                </div>
              </div>
            </div>
            <div className="session" name="contato">
              <h3>Contato</h3>
              <div className="data-session">
                <div className="part-1">
                  <Display title="email" data="loremipsum@ferreiracosta.com" />
                  <Display title="celular" data="(81) 9 9999-9999" />
                </div>
              </div>
            </div>
            <div className="session" name="status">
              <h3>Status</h3>
              <div className="data-session">
                <Display title="condição" data="ativo" />
                <Display title="Última vez ativo" data="00:00 00/00/0000" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default TelaCliente;
