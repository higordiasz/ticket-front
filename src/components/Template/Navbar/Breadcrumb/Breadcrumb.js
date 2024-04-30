import React from "react";

const NavbarBreadcrumb = ({ page }) => {
  return (
    <nav className="breadcrumb">
      <h6 className="font-weight-bolder mb-0">{page}</h6>
    </nav>
  );
};

export default NavbarBreadcrumb;
