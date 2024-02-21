import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Createuseform from "../Components/Usecurd/CreateUserForm";
describe("user form..", () => {
  test("should render without errors", () => {
    <Createuseform />;
    waitFor(() => {
      expect(screen.getByText("Read Operation")).toBeInTheDocument();
      expect(screen.getByText("Create")).toBeInTheDocument();
      expect(screen.getByText("Show Data")).toBeInTheDocument();
      expect(screen.getByLabelText("Name")).toBeInTheDocument();
      expect(screen.getByLabelText("Email address")).toBeInTheDocument();
      expect(screen.getByLabelText("Password")).toBeInTheDocument();
    });
  });

  test('should show password when "Show Password" checkbox is checked', () => {
    <Createuseform />;
    waitFor(() => {
      fireEvent.click(getByLabelText("Show Password"));
      expect(getByDisplayValue("password")).toBeInTheDocument();
    });
  });

  test("should submit form when Submit button is clicked", () => {
    const handleSubmit = jest.fn();
    <Createuseform handleSubmit={handleSubmit} />;
    waitFor(() => {
      fireEvent.click(getByText("Submit"));
      expect(handleSubmit).toHaveBeenCalled();
    });
  });
});
