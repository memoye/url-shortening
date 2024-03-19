import Button from "./button";
import { useState } from "react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  function toggleNav() {
    document.body.classList.toggle("overflow-y-hidden");
    setNavOpen((prev) => !prev);
  }

  return (
    <>
      <div
        className={`bg-gradient-to-b z-40 from-white via-white to-transparent h-20 md:h-28 w-full fixed`}
      >
        <header
          className={`fixed inset-x-0 mx-auto flex max-w-screen-lg items-center justify-between px-4 lg:py-8 py-5 text-white md:gap-8 md:px-4 lg:px-0 md:text-neutral-200 md:-mt-4 lg:-mt-0`}
        >
          {/* logo */}
          <a
            href="#"
            className="hover:opacity-80 md:min-w-24"
            onClick={() => {
              if (navOpen) {
                toggleNav();
              }
            }}
          >
            <img className="w-full" src="images/logo.svg" alt="Shortly" />
          </a>

          {/* nav */}
          <nav
            className={`fixed left-1/2 w-11/12 -translate-x-1/2 rounded-lg bg-accent px-5 py-6 text-center transition-all duration-200 ease-out md:relative md:left-0 md:top-0 md:z-30 md:flex max-w-md md:w-full md:max-w-full md:translate-x-0 md:rounded-none md:bg-transparent md:px-0 md:opacity-100 lg:py-0 ${
              !navOpen
                ? "top-16 -z-50 opacity-0 invisible md:visible"
                : "top-24 z-50 opacity-100"
            }
          `}
          >
            <menu className="flex flex-col items-center gap-8 md:flex-row md:gap-4">
              {["features", "pricing", "resources"].map((i) => {
                return (
                  <li
                    key={i}
                    className={
                      "text-[0.8rem] font-bold capitalize hover:text-neutral-300"
                    }
                  >
                    <a
                      className="active:text-primary focus:text-primary visited:text-white md:visited:text-neutral-200"
                      href={`#${i}`}
                      onClick={() => {
                        if (navOpen) {
                          toggleNav();
                        }
                      }}
                    >
                      {i}
                    </a>
                  </li>
                );
              })}
            </menu>
            <hr className="mx-auto mb-4 mt-6 opacity-20" />
            <div className="flex flex-col items-center gap-3 px-1 md:flex-row md:gap-2 md:px-0">
              <Button className="hover:text-accent" shape="round">
                Login
              </Button>
              <Button
                className="hover:bg-opacity-60 w-full md:w-fit"
                shape="round"
                fill="light"
              >
                Sign Up
              </Button>
            </div>
          </nav>

          {/* hamburger */}
          <Button
            className={`relative md:hidden w-8 h-5 gap-2 rounded-none px-0 py-0 ${!navOpen && "rotate-[360deg]"}`}
            onClick={toggleNav}
          >
            <span
              className={`absolute block h-[3px] w-8 bg-neutral-200 transition duration-200 ease-in  ${
                navOpen
                  ? " right-0 top-[12px] w-8 rotate-45 mb-2"
                  : "top-0 left-1/2 -translate-x-1/2"
              }`}
            />
            <span
              className={`absolute block left-1/2 -translate-x-1/2 h-[3px] w-8 bg-neutral-200 transition duration-75 ease-in ${
                navOpen ? "scale-x-0 " : "scale-100 top-1/2 -translate-y-1/2"
              }`}
            />
            <span
              className={` absolute block h-[3px] w-8 bg-neutral-200 transition duration-200 ease-in ${
                navOpen
                  ? "right-0 top-[12px] w-8 -rotate-45"
                  : "left-1/2 -translate-x-1/2 bottom-0"
              }`}
            />
          </Button>
        </header>
      </div>

      {/* close nav if you click outside */}
      {navOpen && (
        <button
          className="fixed inset-0 z-20 bg-transparent backdrop-blur-[1px] md:hidden bg-error"
          aria-label="close navigation"
          type="button"
          onClick={toggleNav}
        />
      )}
    </>
  );
};

export default Header;
