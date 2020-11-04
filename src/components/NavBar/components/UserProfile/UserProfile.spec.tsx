import React from "react";
import { render, screen } from "@testing-library/react";

import UserProfile from "./UserProfile";

it("should renders component with the valid username", () => {
  render(<UserProfile username="John Doo" disconnectUser={jest.fn()} />);
  expect(screen.getByText("John Doo")).toBeInTheDocument();
});
