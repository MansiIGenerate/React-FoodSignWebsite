import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function AddEditForm(props) {
  const [form, setValues] = useState({
    id: 0,
    name: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitFormAdd = (e) => {
    console.log(props.item);
    e.preventDefault();
    fetch("http://localhost:3000/crud", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        password: form.password,
      }),
    })
      .then((response) => response.json())
      .then((item) => {
        if (Array.isArray(item)) {
          props.addItemToState(item[0]);
          props.toggle();
        } else {
          console.log("failure");
        }
      })
      .catch((err) => console.log(err));
    props.addItemToState(form);
    props.toggle();
  };

  const submitFormEdit = (e) => {
    e.preventDefault();
    // fetch("http://localhost:3000/crud", {
    //   method: "put",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     id: form.id,
    //     name :form.name
    //     email: form.email,
    //     password :form.password
    //   })
    // })
    //   .then((response) => response.json())
    //   .then((item) => {
    //     if (Array.isArray(item)) {
    //       // console.log(item[0])
    //       props.updateState(item[0]);
    //       props.toggle();
    //     } else {
    //       console.log("failure");
    //     }
    //   })
    //   .catch((err) => console.log(err));
    props.updateState(form);
    props.toggle();
  };

  useEffect(() => {
    if (props.item) {
      const { id, name, email, password } = props.item;
      setValues({ id, name, email, password });
    }
  }, [props.item]);

  return (
    <Form onSubmit={props.item ? submitFormEdit : submitFormAdd}>
      <FormGroup>
        <Label for="first">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          onChange={onChange}
          value={form.first === null ? "" : form.first}
        />
      </FormGroup>

      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          onChange={onChange}
          value={form.email === null ? "" : form.email}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">password</Label>
        <Input
          type="password"
          name="password"
          id="password"
          onChange={onChange}
          value={form.email === null ? "" : form.email}
        />
      </FormGroup>

      <Button>Submit</Button>
    </Form>
  );
}

export default AddEditForm;
