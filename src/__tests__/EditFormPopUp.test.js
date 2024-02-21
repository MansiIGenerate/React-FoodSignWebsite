import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import EditFormPopUp from "../Components/Usecurd/EditFormPopUp";

jest.mock("axios");

describe("EditFormPopUp", () => {
  test("should update data when Update button is clicked", async () => {
    const mockedNavigate = jest.fn();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => mockedNavigate,
    }));

    const mockData = {
      id: "1",
      name: "manu",
      email: "manu@example.com",
      password: "password123",
    };

    const updatedName = "Updated Name";
    const updatedEmail = "updated@example.com";
    const updatedPassword = "newpassword123";

    axios.put.mockResolvedValueOnce();

    const { getByText, getByLabelText } = render(
      <EditFormPopUp {...mockData} />
    );

    const editButton = getByText("Edit");
    fireEvent.click(editButton);

    const nameInput = getByLabelText("Name");
    const emailInput = getByLabelText("Email address");
    const passwordInput = getByLabelText("Password");

    fireEvent.change(nameInput, { target: { value: updatedName } });
    fireEvent.change(emailInput, { target: { value: updatedEmail } });
    fireEvent.change(passwordInput, { target: { value: updatedPassword } });

    const updateButton = getByText("Update");
    fireEvent.click(updateButton);

    await waitFor(() => {
      expect(axios.put).toHaveBeenCalledWith(
        `https://65b68428da3a3c16ab00d20e.mockapi.io/curdApp/curd-datato/${mockData.id}`,
        {
          name: updatedName,
          email: updatedEmail,
          password: updatedPassword,
        }
      );
      expect(mockedNavigate).toHaveBeenCalledWith("/read");
    });
  });
});
