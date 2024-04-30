import React from "react";

const Ticket = ({
  title,
  description,
  problem,
  department,
  created,
  ticketID,
  ownerID,
  remove,
  done,
  reply,
  buttons,
}) => {
  const handlerRemove = () => {
    remove(ticketID);
  };

  const handleReply = () => {
    reply(ticketID);
  };

  const handleDone = () => {
    done(ticketID);
  };

  return (
    <div data-id={ticketID} data-owner={ownerID} className="card ticket-card">
      <div className="card-body">
        <div className="row">
          <div className="col-lg-12">
            <h5 className="card-title">{title}</h5>
          </div>
        </div>
        <div className="row ticket-column">
          <div className="col-lg-12">
            <p className="card-text card-description">{description}</p>
          </div>
        </div>
        <div className="row ticket-column">
          <div className="col-lg-6">
            <p className="card-text card-date">Problema: {problem}</p>
          </div>
          <div className="col-lg-6">
            <p className="card-text card-date">Local: {department}</p>
          </div>
        </div>
        <div className="row ticket-column">
          <div className="col-lg-6">
            <p className="card-text card-date">
              Data: {new Date(created).toLocaleString()}
            </p>
          </div>
          <div className="col-lg-6">
            <button
              style={buttons.remove ? {} : { display: "none" }}
              className="btn btn-sm btn-danger mr-1"
              onClick={handlerRemove}
            >
              <span className="material-symbols-outlined">delete</span>
            </button>
            <button
              style={buttons.done ? {} : { display: "none" }}
              className="btn btn-sm btn-success mr-1"
              onClick={handleDone}
            >
              <span className="material-symbols-outlined">done</span>
            </button>
            <button
              style={buttons.reply ? {} : { display: "none" }}
              className="btn btn-sm btn-info"
              onClick={handleReply}
            >
              <span className="material-symbols-outlined">reply</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
