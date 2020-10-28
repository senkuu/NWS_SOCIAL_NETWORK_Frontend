import React, { useState } from "react";

// import types
import { User } from "types/user";

interface IUserContextProps {
  children: React.ReactNode;
}

interface IUserContextType {
  user: User | null;
  disconnectUser: () => void;
}

export const UserContext = React.createContext<IUserContextType>(null as any);

export function UserContextProvider(props: IUserContextProps) {
  const [user, setUser] = useState<User | null>({
    id: 42,
    username: "Bob Lennon",
  });

  const disconnectUser = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, disconnectUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
