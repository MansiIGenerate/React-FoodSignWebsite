import React from "react";
import { screen, waitFor } from "@testing-library/react";
import NevbarFood from "../Components/Navbar/NevbarFood";

test("renders NevbarFood component with links and cart icon", () => {
  <NevbarFood />;
  waitFor(() => {
    const logoText = screen.getByText("Food..");
    expect(logoText).toBeInTheDocument();
    const homeLink = screen.getByText("home");
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.getAttribute("href")).toBe("/homefood");
    const cartIcon = screen.getByTestId("cart-icon");
    expect(cartIcon).toBeInTheDocument();
    expect(cartIcon.closest("a")).toHaveAttribute("href", "/cart");
  });
});
// jest.mock('@react-icons/all-files/ai/AiOutlineShoppingCart', () => () => <span data-testid="cart-icon">MockCartIcon</span>);
