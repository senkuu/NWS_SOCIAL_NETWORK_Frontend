import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";

import UserProfile from "./UserProfile";

it("should renders component with the valid username", () => {
  render(<UserProfile username="John Doe" disconnectUser={jest.fn()} />);
  expect(screen.getByText("John Doe")).toBeInTheDocument();
});

it("should call disconnectUser function in props when logout button is pressed", () => {
  const fakeDisconnectUser = jest.fn();
  const { getByTestId } = render(
    <UserProfile username="John Doe" disconnectUser={fakeDisconnectUser} />
  );

  fireEvent.click(getByTestId("userprofile-button"));
  fireEvent.click(getByTestId("userprofile-logout-button"));
  expect(fakeDisconnectUser).toBeCalled();
});
