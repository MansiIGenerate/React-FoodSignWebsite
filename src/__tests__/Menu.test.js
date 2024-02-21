import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Menu from "./Menu";

jest.mock("../Context/ContextFood", () => ({
  Contextapp: {
    Consumer: ({ children }) =>
      children({
        addtocard: jest.fn(),
        added: null,
      }),
  },
}));

describe("Menu Component", () => {
  it("renders menu items correctly", () => {
    const { getByText } = render(<Menu />);

    expect(screen.getByText("Menu")).toBeInTheDocument();
    expect(screen.getByText("pizza")).toBeInTheDocument();
    expect(screen.getByText("burger")).toBeInTheDocument();
  });

  it('adds item to card when "add to card" button is clicked', () => {
    const { getByText } = render(<Menu />);

    fireEvent.click(screen.getByText("add to card"));
    expect(addtocard).toHaveBeenCalled();
  });

  it('renders "added" when item is added to card', () => {
    const { getByText } = render(<Menu />);

    expect(screen.getByText("added")).toBeInTheDocument();
  });
});
