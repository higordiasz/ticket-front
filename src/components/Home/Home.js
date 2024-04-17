import React, { useEffect, useState } from "react";
import API from "../../api";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";

const Home = () => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  const checkToken = async () => {
    let valid = await API.Login.Controller.checkLogin(token);
    if (!valid.valid) navigate("/");
  };
  /*
  const criarChamado = (titulo, descricao, dataCriacao, tipo) => {
    return `<div class="card">
                  <div class="card-body">
                      <h5 class="card-title">${titulo}</h5>
                      <p class="card-text card-description">${descricao}</p>
                      <p class="card-text card-date">Data de Criação: ${dataCriacao}</p>
                      <div class="float-right">
                          <button class="btn btn-sm btn-danger mr-1" onclick="excluirChamado()"><span class="material-symbols-outlined">delete</span></button>
                          <button class="btn btn-sm btn-success mr-1" onclick="concluirChamado()"><span class="material-symbols-outlined">done</span></button>
                          <button class="btn btn-sm btn-info" onclick="responderChamado()"><span class="material-symbols-outlined">reply</span></button>
                      </div>
                  </div>
              </div>`;
  };

  const adicionarChamado = (titulo, descricao, dataCriacao, tipo) => {
    const chamadoHTML = criarChamado(titulo, descricao, dataCriacao, tipo);
    let coluna;
    switch (tipo) {
      case "resolvidos":
        coluna = document.getElementById("resolvidos");
        break;
      case "urgentes":
        coluna = document.getElementById("urgentes");
        break;
      case "novos":
        coluna = document.getElementById("novos");
        break;
      case "aguardando":
        coluna = document.getElementById("aguardando");
        break;
      default:
        return; // Retorna se o tipo não for reconhecido
    }
    coluna.insertAdjacentHTML("beforeend", chamadoHTML);
  };

  const excluirChamado = () => {
    console.log("Chamado excluído!");
  };

  const concluirChamado = () => {
    console.log("Chamado concluído!");
  };

  const responderChamado = () => {
    console.log("Chamado respondido!");
  };

  adicionarChamado(
    "Chamado 1",
    "Descrição breve do chamado 1.",
    "17/04/2024",
    "resolvidos"
  );
  adicionarChamado(
    "Chamado 2",
    "Descrição breve do chamado 2.",
    "17/04/2024",
    "urgentes"
  );
  adicionarChamado(
    "Chamado 3",
    "Descrição breve do chamado 3.",
    "17/04/2024",
    "novos"
  );
  adicionarChamado(
    "Chamado 4",
    "Descrição breve do chamado 4.",
    "17/04/2024",
    "aguardando"
  );
*/
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="column">
              <h2>
                <span className="material-symbols-outlined">done_outline</span>{" "}
                Resolvidos
              </h2>
              <div id="resolvidos" className="card card-container">
                {/* Adicionar os chamados aqui */}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="column">
              <h2>
                <span className="material-symbols-outlined">warning</span>{" "}
                Urgentes
              </h2>
              <div id="urgentes" className="card card-container">
                {/* Adicionar os chamados aqui */}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="column">
              <h2>
                <span className="material-symbols-outlined">
                  add_circle_outline
                </span>{" "}
                Novos
              </h2>
              <div id="novos" className="card card-container">
                {/* Adicionar os chamados aqui */}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="column">
              <h2>
                <span className="material-symbols-outlined">
                  hourglass_empty
                </span>{" "}
                Aguardando Resposta
              </h2>
              <div id="aguardando" className="card card-container">
                {/* Adicionar os chamados aqui */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-primary btn-floating"
        data-togle="modal"
        data-target="#novoTicketModal"
      >
        <span className="material-symbols-outlined">add</span>
      </button>
      <div
        className="modal fade"
        id="novoTicketModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="novoTicketModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="novoTicketModalLabel">
                Novo Ticket de Suporte
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Fechar"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form id="formNovoTicket">
                <div className="form-group">
                  <label for="titulo">Título:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="titulo"
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="descricao">Descrição:</label>
                  <textarea
                    className="form-control"
                    id="descricao"
                    rows="3"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Criar Ticket
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
