import React from "react";
import { Fieldset } from "primereact/fieldset";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";

const Compounds = () => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <Fieldset legend="Compounds">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Fieldset>
      <Button
        label="Home"
        icon="pi pi-check"
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default Compounds;
