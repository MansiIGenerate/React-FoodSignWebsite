import React from "react";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Login from "../Components/Login/Login";

describe("Login Component", () => {
  test("displays error message for empty email and password", () => {
    <Login />;
    waitFor(() => {
      fireEvent.click(screen.getByTestId("submitbtn"));
      expect(screen.getByText(/Email field is required/i)).toBeInTheDocument();
      expect(
        screen.getByText(/Password field is required/i)
      ).toBeInTheDocument();
    });
  });

  test("displays error message for invalid email format", () => {
    <Login />;
    waitFor(() => {
      fireEvent.change(screen.getByPlaceholderText(/Enter email/i));
      fireEvent.click(screen.getByTestId("submitbtn"));
      expect(
        screen.getByText(/Please enter a valid email address/i)
      ).toBeInTheDocument();
    });
  });

  test("displays error message for password length less than 6", () => {
    <Login />;
    waitFor(() => {
      fireEvent.change(screen.getByPlaceholderText(/Password/i));
      expect(
        screen.getByText(
          /Password length should be greater than or equal to 6/i
        )
      ).toBeInTheDocument();
    });
  });

  test("redirects to /aboutdetail on successful login", () => {
    <Login />;
    waitFor(() => {
      fireEvent.change(screen.getByPlaceholderText(/Enter email/i), {
        target: { value: "test@example.com" },
      });
      fireEvent.change(screen.getByPlaceholderText(/Password/i), {
        target: { value: "password123" },
      });
      fireEvent.click(screen.getByTestId("submitbtn"));
      expect(screen.getByTestId("aboutdetail")).toBeInTheDocument();
    });
  });

  describe("Login Component", () => {
    test('navigates to /login on "Sign up" link click', () => {
      const history = { push: jest.fn() };
      <Login />;
      waitFor(() => {
        fireEvent.click(screen.getByText(/Sign up/i));
        // expect(history.location.pathname).toBe('/login');
        expect(screen.getByText("Don't Have an Account?")).toBeInTheDocument();
        expect(history.push).toHaveBeenCalledWith("/login");
      });
    });
  });
});
