import React from "react";

const Ticket = ({ title, description, created, ticketID, ownerID }) => {
  return (
    <div data-id={ticketID} data-owner={ownerID} class="card">
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text card-description">{description}</p>
        <p class="card-text card-date">Data de Criação: {created}</p>
        <div class="float-right">
          <button class="btn btn-sm btn-danger mr-1" onclick="excluirChamado()">
            <span class="material-symbols-outlined">delete</span>
          </button>
          <button
            class="btn btn-sm btn-success mr-1"
            onclick="concluirChamado()"
          >
            <span class="material-symbols-outlined">done</span>
          </button>
          <button class="btn btn-sm btn-info" onclick="responderChamado()">
            <span class="material-symbols-outlined">reply</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
