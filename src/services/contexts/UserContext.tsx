import React, { useState, useContext } from "react";

// import types
import { User } from "types/user";

interface IUserContextProps {
  children: React.ReactNode;
}

interface IUserContextType {
  user: User | null;
  disconnectUser: () => void;
  authenticateUser: (userInfo: User) => void;
}

export const UserContext = React.createContext<IUserContextType>(null as any);

export function UserContextProvider(props: IUserContextProps) {
  const [user, setUser] = useState<User | null>(null);

  const disconnectUser = () => {
    setUser(null);
  };

  const authenticateUser = (userInfo: User) => {
    fetch("https://localhost:5001/account/google-login")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(JSON.stringify(myJson));
      });
    setUser({
      ...userInfo,
    });
  };

  const value = { user, disconnectUser, authenticateUser };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
}

export function useUser() {
  const value = useContext(UserContext);
  return value;
}
