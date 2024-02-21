import React from "react";
import { waitFor } from "@testing-library/react";
import TableComponent from "../Components/Comman/TableComponets";

test("renders table with correct columns and data", () => {
  const data = [{ id: 1, name: "mansi", age: 23 }];
  const columns = [
    { key: "id", name: "ID" },
    { key: "name", name: "Name" },
    { key: "age", name: "Age" },
  ];

  <TableComponent data={data} columns={columns} />;
  waitFor(() => {
    expect(getByText("ID")).toBeInTheDocument();
    expect(getByText("Name")).toBeInTheDocument();
    expect(getByText("Age")).toBeInTheDocument();
    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("mansi")).toBeInTheDocument();
    expect(getByText("23")).toBeInTheDocument();
  });
});
