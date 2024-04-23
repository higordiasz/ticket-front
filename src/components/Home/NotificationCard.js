import React from "react";

const NotificationCard = ({ title, message, date, id, remove }) => {
  const handleRemoveNotification = () => remove(id);
  return (
    <li className="list-group-item">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{title}</h5>
        <button
          className="btn btn-sm btn-clear"
          onClick={handleRemoveNotification}
        >
          &times;
        </button>
      </div>
      <p className="mb-1">{message}</p>
      <small>Data: {date}</small>
    </li>
  );
};

export default NotificationCard;
