import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import ReadTableCom from "../Components/Usecurd/ReadTableCom";

describe("table data ", () => {
  test("renders correctly with necessary elements", () => {
    <ReadTableCom />;
    waitFor(() => {
      expect(getByText("Read Operation")).toBeInTheDocument();
      expect(getByText("Create")).toBeInTheDocument();
      expect(getByText("Create")).toHaveClass("btn", "btn-secondary");
      expect(getByTestId("pagination-component")).toBeInTheDocument();
    });
  });

  test("clicking on Edit button calls the correct function and sets local storage", () => {
    const setToLocalStorageMock = jest.fn();
    const handleDeleteMock = jest.fn();
    const { getByTestId } = render(
      <ReadTableCom
        setToLocalStorage={setToLocalStorageMock}
        handleDelete={handleDeleteMock}
      />
    );
    waitFor(() => {
      fireEvent.click(getByTestId("btn-comman"));
      expect(setToLocalStorageMock).toHaveBeenCalledWith();
      expect(handleDeleteMock).not.toHaveBeenCalled();
    });
  });

  test("clicking on Delete button calls the correct function", () => {
    const setToLocalStorageMock = jest.fn();
    const handleDeleteMock = jest.fn();
    const { getByText } = render(
      <ReadTableCom
        setToLocalStorage={setToLocalStorageMock}
        handleDelete={handleDeleteMock}
      />
    );
    waitFor(() => {
      fireEvent.click(getByText("Delete"));
      expect(handleDeleteMock).toHaveBeenCalledWith();
      expect(setToLocalStorageMock).not.toHaveBeenCalled();
    });
  });
});

// import { render, fireEvent, waitFor } from "@testing-library/react";
// import axios from "axios";

// jest.mock('axios');

// describe('User API', () => {
//   it('fetches user data successfully', async () => {
//     // Mock response data
//     const mockResponseData = {
//       id: 1,
//       name: 'John Doe',
//       email: 'john@example.com',
//     };
//     axios.get.mockResolvedValue({ data: mockResponseData });
//     const response = await axios.get('/api/users');
//     waitFor(() => {
//       expect(response.data).toEqual(mockResponseData);
//     })
//   });
// });
