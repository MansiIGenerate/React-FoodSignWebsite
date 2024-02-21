import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContextFood from "../Components/Context/ContextFood";

describe("Context Component", () => {
  it("should add an item to the cart", () => {
    <Context>
      <ContextFood />
    </Context>;
    waitFor(() => {
      const addButton = screen.getByTestId("addButton");
      userEvent.click(addButton);
      expect(screen.getByTestId("addedIndicator")).toBeVisible();
      expect(screen.getByTestId("cartItemCount")).toHaveTextContent("1");
    });
  });
});
