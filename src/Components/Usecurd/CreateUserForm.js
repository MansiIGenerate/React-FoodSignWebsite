import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

const CreateUserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const history = useNavigate();

  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return name.trim() !== "" && nameRegex.test(name);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return email.trim() !== "" && emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.trim() !== "" && password.length >= 6;
  };

  const validatiOfFoodsitem = () => {
    const newErrors = {};
    if (!validateName(name)) {
      newErrors.name = "Name is required and should contain only letters.";
    }
    if (!validateEmail(email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!validatePassword(password)) {
      newErrors.password =
        "Password is required and should be at least 6 characters.";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //   const err = validationsitem()
    // console.log(err)
    if (!validatiOfFoodsitem()) {
      return;
    }
    axios
      .post("https://65b68428da3a3c16ab00d20e.mockapi.io/curdApp/curd-datato", {
        name: name,
        email: email,
        password: password,
      })
      .then(() => {
        history("/read");
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        setErrors({ general: "Error creating user. Please try again." });
      });
  };

  return (
    <>
      <div className="d-flex justify-content-between m-2">
        <h2>Create</h2>
        <Link to="/read">
          <button className="btn btn-primary">Show Data</button>
        </Link>
      </div>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <div className="text-danger">{errors.name}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type={password ? "text" : "password"}
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Form.Check
            type="checkbox"
            label="Show Password"
            checked={password}
            onChange={() => setPassword(!password)}
            className="mt-2"
          />

          {errors.password && (
            <div className="text-danger">{errors.password}</div>
          )}
        </div>

        {errors.general && (
          <div className="alert alert-danger">{errors.general}</div>
        )}

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default CreateUserForm;
