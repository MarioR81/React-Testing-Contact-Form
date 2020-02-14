import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  // Arange
  const {getByText} = render(<App />);
  // Act
  const header = getByText(/testing/i);
  // Assert
  expect(header).toBeInTheDocument();
});
