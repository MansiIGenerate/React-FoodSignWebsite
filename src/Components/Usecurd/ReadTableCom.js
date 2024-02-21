import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ButtonComponent from "../Comman/ButtonComponent";
import TableComponent from "../Comman/TableComponets";
import PaginationsComman from "../Comman/PaginationsComman";

const ReadTableCom = () => {
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const columns = [
    { key: "id", name: "ID" },
    { key: "name", name: "Name" },
    { key: "email", name: "Email" },
    { key: "password", name: "Password" },
    // { key: 'password', name: '123' },
    { key: "actions", name: "Actions" },
  ];

  function getData() {
    axios
      .get("https://65b68428da3a3c16ab00d20e.mockapi.io/curdApp/curd-datato")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function handleDelete(id) {
    axios
      .delete(
        `https://65b68428da3a3c16ab00d20e.mockapi.io/curdApp/curd-datato/${id}`
      )
      // .then(() => {
      //   getData();
      // });
      .then(() => {
        const LastItemLastPage =
          data.length % itemsPerPage === 1 &&
          currentPage === Math.ceil(data.length / itemsPerPage);
        if (LastItemLastPage && currentPage > 1) {
          setCurrentPage(currentPage - 1);
        } else {
          getData();
        }
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
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
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const LastItempage = currentPage * itemsPerPage;
  const FirstItempage = LastItempage - itemsPerPage;
  const currentItems = data.slice(FirstItempage, LastItempage);

  return (
    <>
      <div className="d-flex justify-content-between m-2">
        <h2>Read Operation</h2>
        <Link to="/users">
          <button className="btn btn-secondary">Create</button>
        </Link>
      </div>
      <TableComponent
        columns={columns}
        data={currentItems.map((row) => ({
          ...row,
          actions: (
            <>
              <Link to="/update">
                <ButtonComponent
                  buttonTitle="Edit"
                  btnClass="btn-success"
                  data-testid="btn-comman"
                  variant="primary"
                  handleOnClick={() => {
                    setToLocalStorage(
                      row.id,
                      row.name,
                      row.email,
                      row.password
                    );
                  }}
                />
              </Link>

              <ButtonComponent
                handleOnClick={() => handleDelete(row.id)}
                buttonTitle="Delete"
                btnClass="btn-danger"
              />
            </>
          ),
        }))}
      />
      <PaginationsComman
        totalItems={data.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default ReadTableCom;
