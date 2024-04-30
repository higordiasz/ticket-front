import React, { useEffect, useState } from "react";
import Template from "../Template/Template";

const Home = () => {
  return (
    <>
      <Template
        content={
          <div>
            <h3>Teste</h3>
          </div>
        }
        name={"Home"}
        showSearch={true}
      />
    </>
  );
};

export default Home;
