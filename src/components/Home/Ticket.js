import React from "react";

const Ticket = ({ title, description, created, ticketID, ownerID }) => {
  return (
    <div
      key={ticketID}
      data-id={ticketID}
      data-owner={ownerID}
      className="card"
    >
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text card-description">{description}</p>
        <p className="card-text card-date">Data de Criação: {created}</p>
        <div className="float-right">
          <button className="btn btn-sm btn-danger mr-1">
            <span className="material-symbols-outlined">delete</span>
          </button>
          <button className="btn btn-sm btn-success mr-1">
            <span className="material-symbols-outlined">done</span>
          </button>
          <button className="btn btn-sm btn-info">
            <span className="material-symbols-outlined">reply</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
