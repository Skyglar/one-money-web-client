import { createContext, useState } from "react";

interface IGlobalState {
  token: string;
}

interface IGlobalContext {
  globalState: IGlobalState;
  saveData: (data: object) => void;
}

export const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext);

export function GlobalContextProvider({ children }: any) {
  const initState: IGlobalState = {
    token: '',
  };

  const [globalState, setGlobalState] = useState<IGlobalState>(initState);

  const saveData = (data: object) => {
    debugger;
    setGlobalState(Object.assign({}, globalState, { ...data }));
  };

  return (
    <GlobalContext.Provider value={{ globalState, saveData }}>
      {children}
    </GlobalContext.Provider>
  );
}
