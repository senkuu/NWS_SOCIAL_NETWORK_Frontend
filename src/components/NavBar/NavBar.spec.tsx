import React from "react";
import userEvent from "@testing-library/user-event";
import { render, cleanup } from "@testing-library/react";

import NavBar from "./NavBar";
import { UserContextProvider } from "services/contexts/UserContext";

const renderWithContext = (component: React.ReactNode) => {
  return { ...render(<UserContextProvider>{component}</UserContextProvider>) };
};

afterEach(cleanup);

it("should renders component", () => {
  const { getByTestId } = renderWithContext(<NavBar />);
  expect(getByTestId("navbar")).toBeInTheDocument();
});

it("should login user when login button is clicked and render UserProfile", () => {
  const { getByTestId } = renderWithContext(<NavBar />);
  userEvent.click(getByTestId("login-button"));
  expect(getByTestId("userprofile-button")).toBeInTheDocument();
});

it("should no longer render UserProfile when user is login and logout button is clicked", () => {
  const { getByTestId } = renderWithContext(<NavBar />);
  userEvent.click(getByTestId("login-button"));
  userEvent.click(getByTestId("userprofile-button"));
  userEvent.click(getByTestId("userprofile-logout-button"));
  expect(() => getByTestId("userprofile-button")).toThrow();
});

it("should not render UserProfile when user is not login", () => {
  const { getByTestId } = renderWithContext(<NavBar />);
  expect(() => getByTestId("userprofile-button")).toThrow();
});
