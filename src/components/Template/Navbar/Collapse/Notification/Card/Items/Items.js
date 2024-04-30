import React from "react";

const NotificationItem = ({ href, image, title, sub_title, time }) => {
  return (
    <li className="mb-2">
      <a href={href} className="dropdown-item border-radius-md">
        <div className="d-flex py-1">
          <div className="my-auto">
            <img src={image} className="avatar avatar-sm me-3" />
          </div>
          <div className="d-flex flex-column justify-content-center">
            <h6 className="text-sm font-weight-normal mb-1">
              <span className="font-weight-bold">{title}</span>
              {sub_title}
            </h6>
            <p>
              <span className="material-symbols-outlined">timer</span>
              {time}
            </p>
          </div>
        </div>
      </a>
    </li>
  );
};

export default NotificationItem;
