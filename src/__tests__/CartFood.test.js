import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Context from "../Components/Context/ContextFood";
import CartFood from "../Components/Context/ContextFood";

describe("Cart Component", () => {
  //   it("renders cart component with items and handles item removal and addition", () => {

  //     const mockAddToCard = jest.fn();
  //     const mockRemoveItem = jest.fn();

  //     const mockCartitem = [
  //       { id: 1, name: "Dish 1", image: "dish1.jpg", count: 2, price: 10 },
  //       { id: 2, name: "Dish 2", image: "dish2.jpg", count: 1, price: 15 },
  //     ];

  //     render(
  //       <Context.Provider value={{ addtocard: mockAddToCard, cartitem: mockCartitem, setcaritem: jest.fn(), added: null }}>
  //         <YourComponent />
  //       </Context.Provider>
  //     );

  //     expect(screen.getByText("cart")).toBeInTheDocument();
  //     expect(screen.getByText("Dish 1")).toBeInTheDocument();
  //     expect(screen.getByText("Dish 2")).toBeInTheDocument();
  //     expect(screen.getByText("total item $35")).toBeInTheDocument();
  //     const removeButton = screen.getByText("-").closest("button");
  //     const addButton = screen.getByText("+").closest("button");

  //     fireEvent.click(removeButton);
  //     expect(mockRemoveItem).toHaveBeenCalledWith(1);

  //     fireEvent.click(addButton);
  //     expect(mockAddToCard).toHaveBeenCalledWith(mockCartitem[0]);
  //   });

  test("triggers checkout action when clicked", () => {
    const mockCheckout = jest.fn();
    <Context />;

    waitFor(() => {
      const logoText = screen.getByText("cart");
      expect(logoText).toBeInTheDocument();
      const totalitem = screen.getByText("total item");
      expect(totalitem).toBeInTheDocument();
      const homeLink = screen.getByText("continue item");
      expect(homeLink).toBeInTheDocument();
      expect(homeLink.getAttribute("href")).toBe("/homefood");
      const checkoutButton = screen.getByText("check out item");
      fireEvent.click(checkoutButton);
      expect(mockCheckout).toHaveBeenCalled();
    });
  });

  test("renders the component with item details", () => {
    const item = { id: 1, name: "Sample Item", count: 2 };
    const removeitem = jest.fn();
    const addtocard = jest.fn();
    const { getByText } = render(
      <CartFood item={item} removeitem={removeitem} addtocard={addtocard} />
    );
    // expect(getByText('Sample Item')).toBeInTheDocument();
    const removeButton = getByText("-");
    const addButton = getByText("+");
    fireEvent.click(removeButton);
    fireEvent.click(addButton);
    expect(removeitem).toHaveBeenCalledWith(1);
    expect(addtocard).toHaveBeenCalledWith(item);
  });
});
