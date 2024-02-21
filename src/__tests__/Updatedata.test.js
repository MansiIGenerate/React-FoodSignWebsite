import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import UpdateForm from "../Components/Usecurd/UpdateData";

describe("UpdateForm component", () => {
  test("renders with initial values and updates correctly", () => {
    const handleUpdateMock = jest.fn();

    const { getByLabelText, getByText } = render(
      <UpdateForm handleUpdate={handleUpdateMock} />
    );
    const nameInput = getByLabelText("Name");
    const emailInput = getByLabelText("Email address");
    const passwordInput = getByLabelText("Password");
    const showPasswordCheckbox = getByLabelText("Show Password");

    waitFor(() => {
      expect(nameInput.value).toBe("");
      expect(emailInput.value).toBe("");
      expect(passwordInput.value).toBe("");
      expect(showPasswordCheckbox.checked).toBe(false);
      fireEvent.change(nameInput, { target: { value: "manu senja" } });
      fireEvent.change(emailInput, { target: { value: "manu9@example.com" } });
      fireEvent.change(passwordInput, { target: { value: "password123" } });
      fireEvent.click(showPasswordCheckbox);
      expect(nameInput.value).toBe("manu senja");
      expect(emailInput.value).toBe("manu9@example.com");
      expect(passwordInput.value).toBe("password123");
      expect(showPasswordCheckbox.checked).toBe(true);
      fireEvent.submit(getByText("Update"));
      expect(handleUpdateMock).toHaveBeenCalled();
    });
  });
});
