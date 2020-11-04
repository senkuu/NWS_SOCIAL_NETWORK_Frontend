import React, { useState } from "react";

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
    setUser({
      ...userInfo,
    });
  };

  return (
    <UserContext.Provider value={{ user, disconnectUser, authenticateUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
