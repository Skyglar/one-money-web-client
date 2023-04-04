import { createContext, useContext, useState } from "react";

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

export const GlobalContext = createContext<IGlobalContext>(
  {} as IGlobalContext
);

function useGlobalContext() {
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

export function GlobalContextProvider({ children }: any) {
  // const initState: IGlobalState = {
  //   token: "",
  //   isAuthenticated: false,
  // };

  // const [globalState, setGlobalState] = useState<IGlobalState>(initState);

  // const saveData = (data: object) => {
  //   debugger;
  //   setGlobalState(Object.assign({}, globalState, { ...data }));
  // };

  // return (
  //   <GlobalContext.Provider value={{ globalState, saveData }}>
  //     {children}
  //   </GlobalContext.Provider>
  // );

  const context = useGlobalContext();

  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
}

export default function GlobalContextConsumer() {
  return useContext(GlobalContext);
}
