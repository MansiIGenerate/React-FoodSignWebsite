import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ButtonComponent from "../Comman/ButtonComponent";

const ReadUserData = () => {
  const [data, setData] = useState([]);
  function getData() {
    axios
      .get("https://65b68428da3a3c16ab00d20e.mockapi.io/curdApp/curd-datato")
      .then((res) => {
        setData(res.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(
        `https://65b68428da3a3c16ab00d20e.mockapi.io/curdApp/curd-datato/${id}`
      )
      .then(() => {
        getData();
      });
  }

  const setToLocalStorage = (id, name, email, password) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between m-2">
        <h2>Read Operation</h2>
        <Link to="/users">
          <button className="btn btn-secondary">Create</button>
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">password</th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>{eachData.password}</td>
                  <td>
                    {/* <ButtonComponent buttonTitle='Edit'  btnClass='btn-success' handleOnClick={()=>console.log('called')} /> */}
                    <Link to="/update">
                      <ButtonComponent
                        buttonTitle="Edit"
                        btnClass="btn-success"
                        handleOnClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email,
                            eachData.password
                          )
                        }
                      />
                    </Link>
                    {/* <Link to="/update">
                      <button
                        className="btn-success"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email,
                            eachData.password
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link> */}
                  </td>
                  <td>
                    <ButtonComponent
                      buttonTitle="Delete"
                      btnClass="btn-danger"
                      handleOnClick={() => handleDelete(eachData.id)}
                    />
                    {/* <button
                      className="btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button> */}
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default ReadUserData;
