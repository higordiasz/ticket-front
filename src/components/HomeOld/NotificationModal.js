import React from "react";
import { Modal } from "react-bootstrap";
import NotificationCard from "./NotificationCard";

const NotificationModal = ({
  show,
  close,
  removeNotification,
  notifications,
}) => {
  const handleClose = () => close();

  const handleRemoveNotification = (notificationToRemove) =>
    removeNotification(notificationToRemove);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Notificações</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul id="notificacoesList" className="list-group">
          {notifications.map((notification) => (
            <NotificationCard
              date={notification.date}
              message={notification.message}
              remove={handleRemoveNotification}
              title={notification.title}
              id={notification.id}
              key={notification.id}
            />
          ))}
        </ul>
      </Modal.Body>
    </Modal>
  );
};

export default NotificationModal;
