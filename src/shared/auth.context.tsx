import { createContext, useContext, useState } from "react";

// TODO refactor

interface IAuth {
  user: string;
  signin: (arg: any) => unknown;
  signout: (arg: any) => unknown;
}

const authContext = createContext<IAuth>({
  user: "",
} as IAuth);

export function ProvideAuth({ children }: any) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState<string | null>(null);

  const signin = (cb: any) => {
    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };

  const signout = (cb: any) => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout,
  } as IAuth;
}

const fakeAuth = {
  isAuthenticated: false,
  signin(cb: any) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb: any) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};
