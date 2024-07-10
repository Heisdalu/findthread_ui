import HamBurger from "@/components/HamBurger/HamBurger";
import Logo from "@/components/assets/Logo";

export default function Home() {
  return (
    <div>
      <div className=" h-[100vh] border-1 bg-black">
        <div className="h-[100%] bg-no-repeat bg-center bg-hero-sm-pattern md:bg-hero-lg-pattern">
          <div className="border-[#fff] border-[1px] px-[1.125rem] py-[1.5rem] flex items-center">
            <Logo />
            <div className="ml-auto">
              <HamBurger />
            </div>
          </div>
          <header className="flex flex-col py-[2rem] px-[1rem] space-y-[1rem]">
            <h1 className="text-white text-center font-[700] text-[2.25rem] flex flex-col">
              <span className="leading-[112%]">Minimize your tabs.</span>
              <span className="leading-[112%]">Find the trends!</span>
            </h1>

            <p className="text-[#8B8B8B] font-normal text-[0.875rem] text-center space-y-[0.3rem]">
              <span className="flex flex-col">
                <span>Don’t let your computer memories consumes</span>
                <span>all of those browser tabs.</span>
              </span>
              <span className="flex flex-col">
                <span>Findtrend let you gathers all of your favorite</span>
                <span>website into one place.</span>
              </span>
            </p>

            <div className="m-auto py-[1.5rem]">
              <button className="rounded-[2.5rem] text-[0.875rem] font-bold h-[44px] w-[139px] bg-[#A8FF35]">
                Get Started 🔥
              </button>
            </div>
          </header>
        </div>
      </div>
      <div className="text-white bg-red-500">
        <h1>Hello word</h1>
      </div>
    </div>
  );
}
