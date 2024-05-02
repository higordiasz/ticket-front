import React from "react";
import Template from "../Template/Template";

const Ticket = () => {
  return (
    <>
      <Template
        content={
          <div>
            <h3>Teste</h3>
          </div>
        }
        name={"Chamados"}
        showSearch={true}
      />
    </>
  );
};

export default Ticket;
