import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import SIgn_img from '../../Asset/image/SIgn_img';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {

  const history = useNavigate();

  const [inpval, setInpval] = useState({
    name: '',
    email: '',
    date: '',
    password: '',
  });

  const [data, setData] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  // console.log(inpval);

  const getdata = (e) => {
    const { value, name } = e.target;
    setInpval((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return name.trim() !== '' && nameRegex.test(name);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return email.trim() !== '' && emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.trim() !== '' && password.length >= 6;
  };

  const addData = (e) => {
    e.preventDefault();

    const { name, email, date, password } = inpval;

    if (!validateName(name)) {
      toast.error('Name is required and should only contain letters and spaces!', { position: 'top-center' });
    } else if (!validateEmail(email)) {
      toast.error('Please enter a valid email address!', { position: 'top-center' });
    } else if (date === '') {
      toast.error('Date field is required!', { position: 'top-center' });
    } else if (!validatePassword(password)) {
      toast.error('Password is required and should be at least six characters long!', { position: 'top-center' });
    } else {
      // console.log('Data added successfully');
      history('/');
      localStorage.setItem('userto', JSON.stringify([...data, inpval]));
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: '100%' }}>
            <h3 className="text-center col-lg-6">Sign Up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicName">
                <Form.Control type="text" name="name" onChange={getdata} placeholder="Enter Your Name" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="email" name="email" onChange={getdata} placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicDate" placeholder="date">
                <Form.Control onChange={getdata} name="date" type="date" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                />
                <Form.Check
                  type="checkbox"
                  label="Show Password"
                  onChange={() => setShowPassword(!showPassword)}
                  className="mt-2"
                />
              </Form.Group>
              <Button
                variant="primary"
                className="col-lg-6"
                onClick={addData}
                style={{ background: 'rgb(67, 185, 127)' }}
                type="submit"
                aria-label="submitt"
                data-testid='submitbtn'
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Already Have an Account <span><NavLink to="/">Sign in</NavLink></span>{' '}
            </p>
          </div>
          {/* <SIgn_img /> */}
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default RegisterPage;



