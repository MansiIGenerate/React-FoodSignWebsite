import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Form from "react-bootstrap/Form";

const UpdateData = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setPassword(localStorage.getItem("password"));
  }, []);

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

  const handleUpdateData = (e) => {
    e.preventDefault();

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
      return;
    }

    axios
      .put(
        `https://65b68428da3a3c16ab00d20e.mockapi.io/curdApp/curd-datato/${id}`,
        {
          name: name,
          email: email,
          password: password,
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
      <h2>Update</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type={password ? "text" : "password"}
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            value={password}
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
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleUpdateData}
        >
          Update
        </button>
        <Link to="/read">
          <button className="btn btn-secondary mx-2">Back</button>
        </Link>
      </form>
    </>
  );
};

export default UpdateData;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Modal, Button } from "react-bootstrap";

// const UpdateData = () => {
//   const [id, setId] = useState(0);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});
//   const [showModal, setShowModal] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     setId(localStorage.getItem("id"));
//     setName(localStorage.getItem("name"));
//     setEmail(localStorage.getItem("email"));
//     setPassword(localStorage.getItem("password"));
//   }, []);

//   const validateName = (name) => {
//     const nameRegex = /^[a-zA-Z\s]+$/;
//     return name.trim() !== "" && nameRegex.test(name);
//   };

//   const validateEmail = (email) => {
//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     return email.trim() !== "" && emailRegex.test(email);
//   };

//   const validatePassword = (password) => {
//     return password.trim() !== "" && password.length >= 6;
//   };

//   const handleUpdateData = (e) => {
//     e.preventDefault();

//     const newErrors = {};

//     if (!validateName(name)) {
//       newErrors.name = "Name is required and should contain only letters.";
//     }

//     if (!validateEmail(email)) {
//       newErrors.email = "Invalid email address.";
//     }

//     if (!validatePassword(password)) {
//       newErrors.password =
//         "Password is required and should be at least 6 characters.";
//     }

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     axios
//       .put(
//         `https://65b68428da3a3c16ab00d20e.mockapi.io/curdApp/curd-datato/${id}`,
//         {
//           name: name,
//           email: email,
//           password: password,
//         }
//       )
//       .then(() => {
//         navigate("/read");
//       })
//       .catch((error) => {
//         console.error("Error updating user:", error);
//       });
//   };

//   return (
//     <>
//       <Button variant="primary" onClick={() => setShowModal(true)}>
//         Edit
//       </Button>
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Update Data</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form>
//             <div className="mb-3">
//               <label className="form-label">Name</label>
//               <input
//                 type="text"
//                 className={`form-control ${errors.name ? "is-invalid" : ""}`}
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//               {errors.name && (
//                 <div className="invalid-feedback">{errors.name}</div>
//               )}
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Email address</label>
//               <input
//                 type="email"
//                 className={`form-control ${errors.email ? "is-invalid" : ""}`}
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               {errors.email && (
//                 <div className="invalid-feedback">{errors.email}</div>
//               )}
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Password</label>
//               <input
//                 type={password ? "text" : "password"}
//                 className={`form-control ${
//                   errors.password ? "is-invalid" : ""
//                 }`}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               {errors.password && (
//                 <div className="invalid-feedback">{errors.password}</div>
//               )}
//             </div>
//           </form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleUpdateData}>
//             Update
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default UpdateData;
