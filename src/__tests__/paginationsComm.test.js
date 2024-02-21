import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import PaginationsComman from "../Components/Comman/PaginationsComman";

test("renders pagination with correct number of pages", () => {
  const totalItems = 30;
  const itemsPerPage = 10;
  const currentPage = 1;
  const onPageChangeMock = jest.fn();
  const onDeleteMock = jest.fn();

  <PaginationsComman
    totalItems={totalItems}
    itemsPerPage={itemsPerPage}
    currentPage={currentPage}
    onPageChange={onPageChangeMock}
    onDelete={onDeleteMock}
  />;

  waitFor(() => {
    const pageButtons = getAllByRole("button");
    expect(pageButtons).toHaveLength(3);
    fireEvent.click(getByText("2"));
    expect(onPageChangeMock).toHaveBeenCalledWith(2);
    fireEvent.click(getByText("3"));
    expect(onDeleteMock).toHaveBeenCalled();
  });
});
