import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Registeruppage from "../Components/Register/RegisterPage";

const addDataMock = jest.fn();

describe(" Component", () => {
  test("login form", () => {
    <Registeruppage />;
    waitFor(() => {
      expect(screen.getByText("Sign Up")).toBeInTheDocument();
      // expect(screen.getByText('Sign Up')).toMatchSnapshot();
    });
  });

  test("login form enter name", () => {
    <Registeruppage />;
    waitFor(() => {
      expect(
        screen.getByPlaceholderText("Enter Your Name")
      ).totoBeInTheDocument();
    });
  });

  // test("login form Enter email", () => {
  //   <Registeruppage />;
  //   waitFor(() => {
  //     expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();
  //   });
  // });

  // test("login form Enter email when email is empty", () => {
  //   const email = 'mansi@getDefaultNormalizer.com';
  //   <Registeruppage />;
  //   waitFor(() => {
  //     expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();
  //   });
  // });

  describe("Email Validation", () => {
    test("displays error message for empty email", () => {
      <Registeruppage />;
      waitFor(() => {
        fireEvent.change(screen.getByPlaceholderText(/Enter email/i), {
          target: { value: "" },
        });
        fireEvent.click(screen.getByTestId("submitbtn"));
        waitFor(() => {
          expect(
            screen.getByText(/Please enter a valid email address/i)
          ).toBeInTheDocument();
        });
      });
    });

    test("displays error message for invalid email format", () => {
      <Registeruppage />;
      waitFor(() => {
        fireEvent.change(screen.getByPlaceholderText(/Enter email/i), {
          target: { value: "invalidEmailFormat" },
        });
        fireEvent.click(screen.getByTestId("submitbtn"));
        waitFor(() => {
          expect(
            screen.getByText(/Please enter a valid email address/i)
          ).toBeInTheDocument();
        });
      });
    });

    test("displays no error message for valid email", () => {
      <Registeruppage />;
      waitFor(() => {
        fireEvent.change(screen.getByPlaceholderText(/Enter email/i), {
          target: { value: "valid@email.com" },
        });
        fireEvent.click(screen.getByTestId("submitbtn"));
        waitFor(() => {
          expect(
            screen.queryByText(/Please enter a valid email address/i)
          ).toBeNull();
        });
      });
    });

    test("displays no error message for a default valid email", () => {
      <Registeruppage />;
      waitFor(() => {
        fireEvent.change(screen.getByPlaceholderText(/Enter email/i), {
          target: { value: "mansi@getDefaultNormalizer.com" },
        });
        fireEvent.click(screen.getByTestId("submitbtn"));
        waitFor(() => {
          expect(
            screen.queryByText(/Please enter a valid email address/i)
          ).toBeNull();
        });
      });
    });
  });

  test("login form date", () => {
    <Registeruppage />;
    waitFor(() => {
      expect(screen.getByPlaceholderText("date")).toBeInTheDocument();
    });
  });

  test("login form enter Password", () => {
    <Registeruppage />;
    waitFor(() => {
      expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    });
  });

  test("renders checkbox and toggles show password", () => {
    <Registeruppage />;
    waitFor(() => {
      const checkbox = screen.getByLabelText("Show Password");
      expect(checkbox).not.toBeChecked();
      fireEvent.click(checkbox);
      expect(checkbox).toBeChecked();
      fireEvent.click(checkbox);
      expect(checkbox).not.toBeChecked();
    });
  });

  describe("Password Validation", () => {
    test("displays error message for invalid password", () => {
      <Registeruppage />;
      waitFor(() => {
        fireEvent.change(screen.getByPlaceholderText(/Password/i));
        fireEvent.click(screen.getByTestId("submitbtn"));
        expect(
          screen.getByText(
            /Password is required and should be at least six characters long/i
          )
        ).toBeInTheDocument();
      });
    });

    test("displays no error message for valid password", () => {
      <Registeruppage />;
      waitFor(() => {
        fireEvent.change(screen.getByPlaceholderText(/Password/i));
        fireEvent.click(screen.getByTestId("submitbtn"));
        expect(
          screen.queryByText(
            /Password is required and should be at least six characters long/i
          )
        ).toBeNull();
      });
    });
  });

  test("clicking the button triggers the addData function", () => {
    <Registeruppage addData={addDataMock} />;
    waitFor(() => {
      const submitButton = screen.getByTestId("submitbtn");
      fireEvent.click(submitButton);
      expect(addDataMock).toHaveBeenCalled();
    });
  });

  describe("Login Component", () => {
    test('navigates to /login on "Sign up" link click', () => {
      const history = { push: jest.fn() };
      <Registeruppage />;
      waitFor(() => {
        fireEvent.click(screen.getByText(/Sign in/i));
        expect(history.push).toHaveBeenCalledWith("/");
      });
    });
  });
});
