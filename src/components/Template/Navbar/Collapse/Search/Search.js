import React from "react";

const NavbarSearch = ({}) => {
  return (
    <div className="ms-md-auto pe-md-3 d-flex align-items-center">
      <div className="input-group">
        <span className="input-group-text text-body">
          <span className="material-symbols-outlined">search</span>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Digite aqui..."
        />
      </div>
    </div>
  );
};

export default NavbarSearch;
