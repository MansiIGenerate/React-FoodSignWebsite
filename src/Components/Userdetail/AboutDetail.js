import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const AboutDetail = () => {
  const history = useNavigate();
  const Menushow = () => {
    history("/homefood");
  };
  const Useshow = () => {
    history("/users");
  };
  return (
    <div className="container">
      <div className="py-4">
        <h1>Menu and User Details</h1>

        <div className="lead">
          Click the menu button
          <Button className="btn-menu" onClick={Menushow}>
            Menu
          </Button>
        </div>
        <br></br>
        <div className="lead">
          Click the Userdetail button
          <Button className="btn-menu" onClick={Useshow}>
            Userdetail
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutDetail;
