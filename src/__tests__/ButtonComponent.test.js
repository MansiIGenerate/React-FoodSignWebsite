import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ButtonComponent from "../Components/Comman/ButtonComponent";

describe("ButtonComponent", () => {
  test("renders button with correct title and class", () => {
    <ButtonComponent />;
    const buttonTitle = "Edit";
    const btnClass = "btn-success";
    const handleOnClick = jest.fn();

    waitFor(() => {
      const button = screen.getByTestId("btn-comman");
      expect(button).toHaveTextContent(buttonTitle);
      expect(button).toHaveClass(btnClass);
      fireEvent.click(button);
      expect(handleOnClick).toHaveBeenCalled();
    });
  });
});
