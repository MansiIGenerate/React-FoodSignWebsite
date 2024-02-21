import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";

const EditFormPopUp = ({ id, name, email, password }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name, email, password });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdateData = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!validateName(formData.name)) {
      newErrors.name = "Name is required and should contain only letters.";
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email address.";
    }

    if (!validatePassword(formData.password)) {
      newErrors.password =
        "Password is required and should be at least 6 characters.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    axios
      .put(
        `https://65b68428da3a3c16ab00d20e.mockapi.io/curdApp/curd-datato/${id}`,
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      )
      .then(() => {
        navigate("/read");
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Edit
      </Button>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                isInvalid={errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                isInvalid={errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                isInvalid={errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateData}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditFormPopUp;
