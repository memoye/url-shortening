import Button from "./button";
import { useState } from "react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  function toggleNav() {
    setNavOpen((prev) => !prev);
  }

  return (
    <header className="bg-gradient-to-b from-white via-white to-transparent h-28 w-full">
      <div
        className={`fixed inset-x-0 mx-auto flex max-w-screen-lg items-center justify-between px-4 py-8 text-white md:gap-8 md:px-4 lg:px-0 md:text-neutral-200`}
      >
        {/* logo */}
        <a href="/" className="hover:opacity-80 md:min-w-24">
          <img className="w-full" src="images/logo.svg" alt="Shortly" />
        </a>

        <nav
          className={`fixed left-1/2 w-11/12 -translate-x-1/2 rounded-lg bg-accent px-5 py-6 text-center transition-all duration-200 ease-out md:relative md:left-0 md:top-0 md:z-30 md:flex max-w-md md:w-full md:max-w-full md:translate-x-0 md:rounded-none md:bg-transparent md:px-0 md:opacity-100 lg:py-0 ${
            !navOpen ? "top-16 -z-50 opacity-0" : "top-24 z-30 opacity-100"
          }
          `}
        >
          <menu className="flex flex-col items-center gap-8 md:flex-row md:gap-4 ">
            {["features", "pricing", "resources"].map((i) => {
              return (
                <li
                  key={i}
                  className={
                    "text-[0.8rem] font-bold capitalize hover:text-neutral-300"
                  }
                >
                  <a className="active:text-primary" href={`#${i}`}>
                    {i}
                  </a>
                </li>
              );
            })}
          </menu>
          <hr className="mx-auto mb-4 mt-6 opacity-20" />
          <div className="flex flex-col items-center gap-3 px-1 md:flex-row md:gap-2 md:px-0">
            <Button shape="round">Login</Button>
            <Button className="w-full md:w-fit" shape="round" fill="light">
              Sign Up
            </Button>
          </div>
        </nav>

        <Button
          className="relative flex h-6 w-8 flex-col items-center justify-between rounded-none px-0 py-0 md:hidden"
          onClick={toggleNav}
        >
          <span
            className={` block h-[3px] w-8 bg-neutral-200 transition duration-200 ease-in ${
              navOpen ? "absolute right-0 top-[12px] w-8 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[3px] w-8 bg-neutral-200 transition duration-75 ease-in ${
              navOpen ? "scale-x-0 " : ""
            }`}
          />
          <span
            className={`block h-[3px] w-8 bg-neutral-200 transition duration-200 ease-in ${
              navOpen ? "absolute right-0 top-[12px] w-8 -rotate-45" : ""
            }`}
          />
        </Button>
      </div>
      {navOpen && (
        <button
          className="fixed inset-0 z-20 bg-transparent md:hidden"
          aria-label="close navigation"
          type="button"
          onClick={() => setNavOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
