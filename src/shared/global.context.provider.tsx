import { createContext, ProviderProps, useState } from "react";

interface IGlobalContext {
    token: string,
}

type smt = ProviderProps<IGlobalContext>

const GlobalContext = createContext<IGlobalContext>({token: ''});
const GlobalDispatchContext = createContext<IGlobalContext>({token: ''});

function GlobalContextProvider({children}: any) {
    const [globalState, setGlobalState] = useState<IGlobalContext>({token: ''});

    return (
        <GlobalContext.Provider value={globalState} >
            <GlobalDispatchContext.Provider value={setGlobalState}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalContext.Provider>
    );
}