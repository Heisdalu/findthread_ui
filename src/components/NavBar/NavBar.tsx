import HamBurger from "../HamBurger/HamBurger";
import Logo from "../assets/Logo";

function NavBar() {
  return (
    <>
      <div className="border-[#fff] z-[10] border-[1px] px-[1.125rem] py-[1.5rem] flex items-center">
        <Logo />
        <div className="ml-auto lg:hidden">
          <HamBurger />
        </div>
      </div>
      {false && (
        <nav className="text-[1.125rem] space-y-[1.5rem] py-[3rem] fixed top-[90px] w-full h-[100vh] bg-black flex flex-col items-center !z-[7] lg:top-[auto] lg:h-[auto] lg:w-[auto] lg:flex-row lg:space-y-0 !lg:py-[0] lg:absolute lg:left-[50%] lg:translate-x-[-50%] remove_pad">
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
        <a href="#" className="flex items-center justify-center capitalize h-[42px] w-[132px] text-black bg-white rounded-[40px]">
          Register
        </a>
      </div>
    </>
  );
}
export default NavBar;
