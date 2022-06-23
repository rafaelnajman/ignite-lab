import { useContext, useEffect, useState } from "react";
import { Logo } from "./Logo";
import { NavContext } from "../Context";
import LogoSm from "./LogoSm";

export function Header() {
  const { isNavOpen, setIsNavOpen } = useContext(NavContext);
  return (
    <header className="w-full py-5 px-10 flex items-center justify-between  bg-gray-700 border-b border-gray-600 xl:justify-center xl:px-0 ">
      <div className="xl-max:hidden">
        <Logo />
      </div>
      <div className="xl:hidden">
        <LogoSm />
      </div>

      <div className="flex gap-3 justify-between items-center">
        <span className="xl:hidden">Aulas</span>
        <div
          className="space-y-2 xl:hidden"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? (
            <svg
              className="h-8 w-8 text-blue-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <>
              <span className="block h-0.5 w-8  bg-blue-500 "></span>
              <span className="block h-0.5 w-8  bg-blue-500"></span>
              <span className="block h-0.5 w-8  bg-blue-500"></span>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
