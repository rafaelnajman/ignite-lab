import { createContext, ReactNode, useEffect, useState } from "react";

interface IContext {
  isNavOpen: boolean;
  setIsNavOpen: (isNavOpen: boolean) => void;
}

interface IProps {
  children: ReactNode;
}

export const NavContext = createContext<IContext>({} as IContext);

export function NavContextProvider({ children }: IProps): JSX.Element {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    console.log(isNavOpen);
  }, [isNavOpen]);

  return (
    <NavContext.Provider value={{ isNavOpen, setIsNavOpen }}>
      {children}
    </NavContext.Provider>
  );
}
