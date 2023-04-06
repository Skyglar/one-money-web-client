import { createContext, useContext, useState } from "react";

// TODO refactor

interface IGlobalState {
  token: string;
  isAuthenticated: boolean;
}

// interface IGlobalContext {
//   globalState: IGlobalState;
//   saveData: (data: object) => void;
// }

interface IGlobalContext {
  isAuthenticated: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const GlobalContext = createContext<IGlobalContext>(
  {} as IGlobalContext
);

export function ProvideGlobalContext({ children }: any) {
  const context = useProvideGlobalContext();

  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
}

function useProvideGlobalContext() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return {
    isAuthenticated,
    login() {
      return new Promise<void>((res) => {
        debugger;
        setIsAuthenticated(true);
        res();
      });
    },
    logout() {
      return new Promise<void>((res) => {
        debugger;
        setIsAuthenticated(false);
        res();
      });
    },
  };
}

export default function useGlobalContext() {
  return useContext(GlobalContext);
}
