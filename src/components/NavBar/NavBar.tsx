import { useEffect, useState } from "react";
import HamBurger from "../HamBurger/HamBurger";
import Logo from "../assets/Logo";
import { motion, Variants } from "framer-motion";

const div: Variants = {
  hide: { zIndex: -1 },
};

function NavBar() {
  const [clicked, setClicked] = useState(false);

  const toggleClick = () => {
    setClicked((prev) => !prev);
    if (!document?.body) return;

    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <>
      <div
        className={`${
          clicked ? "bg-black" : "bg-transparent"
        }  z-[10] border-[1px] px-[1.125rem] py-[1.5rem] flex items-center md:px-[1.5rem] lg:px-[0]`}
      >
        <div className="flex items-center space-x-[14px] ">
          <Logo />
          <span className="text-white hidden lg:block lg:leading- text-[1.5rem]">
            Findtrend
          </span>
        </div>
        <div className="ml-auto lg:hidden">
          <HamBurger click={clicked} toggleClick={toggleClick} />
        </div>
      </div>
      {true && (
        // z-index -1 and 7
        <nav
          className={`text-[1.125rem] ${
            clicked ? "z-[7]" : "z-[-1]"
          } space-y-[1.5rem] py-[3rem] fixed top-[90px] w-full h-[100vh] bg-black flex flex-col items-center lg:!z-[7] lg:top-[auto] lg:h-[auto] lg:w-[auto] lg:flex-row lg:space-y-0 !lg:py-[0] lg:absolute lg:left-[50%] lg:translate-x-[-50%] remove_pad`}
        >
          <ul className="lg:flex lg:space-y-0 space-y-[1.5rem] text-center capitalize lg:space-x-[2.5rem]">
            <li>
              <a href="#" className="text-white">
                about
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                How it work
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                solution
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                features
              </a>
            </li>
          </ul>
          <div className="lg:hidden space-y-[1.5rem] flex flex-col text-center">
            <a href="#" className="text-white capitalize">
              login
            </a>
            <a href="#" className="text-white capitalize">
              Register
            </a>
          </div>
        </nav>
      )}

      <div className="hidden lg:flex items-center flex-col text-center lg:flex-row lg:space-y-0 lg:space-x-[1.5rem] xl:space-x-[2.5rem]">
        <a href="#" className="text-white capitalize">
          login
        </a>
        <a
          href="#"
          className="flex items-center justify-center capitalize h-[42px] w-[132px] text-black bg-white rounded-[40px]"
        >
          Register
        </a>
      </div>
    </>
  );
}
export default NavBar;
