import React from "react";
import { screen, waitFor } from "@testing-library/react";
import FoodHome from "../Components/Home/FoodHome";

test("renders FoodHome component with correct content", () => {
  <FoodHome />;
  waitFor(() => {
    expect(screen.getByText("Food..")).toBeInTheDocument();
    expect(screen.getByText("Food Menu")).toBeInTheDocument();
    expect(
      screen.getByText("From our over to your table, nothing but the best")
    ).toBeInTheDocument();

    const viewMenuButton = screen.getByText("view menu");
    expect(viewMenuButton).toBeInTheDocument();

    const foodImage = screen.getByAltText("");
    expect(foodImage).toBeInTheDocument();
    expect(foodImage.src).toContain("foodimg.jpg");
  });
});
