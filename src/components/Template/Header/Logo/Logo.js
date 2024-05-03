import React from "react";
import Icon from "../../../../assets/images/icon.svg";

const HeaderLogo = () => {
  return (
    <div className="header-logo">
      <a href="#">
        <img src={Icon} alt="text" />
      </a>
    </div>
  );
};

export default HeaderLogo;
