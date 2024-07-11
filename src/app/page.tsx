import HamBurger from "@/components/HamBurger/HamBurger";
import Label from "@/components/Labels/Label";
import Arrow from "@/components/assets/Arrow";
import Logo from "@/components/assets/Logo";
import { goodDogNew } from "@/app/font";

export default function Home() {
  return (
    <div>
      <div className=" border-1 bg-black">
        <div className="xl:max-w-[1400px] xl:mx-auto h-[100%] bg-no-repeat bg-center bg-hero-sm-pattern md:bg-hero-lg-pattern">
          <div className="border-[#fff] border-[1px] px-[1.125rem] py-[1.5rem] flex items-center">
            <Logo />
            <div className="ml-auto">
              <HamBurger />
            </div>
          </div>
          <header className="flex flex-col py-[2rem] px-[1rem] space-y-[1rem]">
            <h1 className="text-white text-center font-[700] text-[2.25rem] flex flex-col md:text-[3.7rem] lg:text-[4.5rem]">
              <span className="leading-[112%]">Minimize your tabs.</span>
              <span className="leading-[112%]">Find the trends!</span>
            </h1>

            <p className="text-[#8B8B8B] font-normal text-[0.875rem] text-center space-y-[0.3rem] md:space-y-0 md:text-[1rem] lg:text-[1.125rem]">
              <span className="flex flex-col md:flex-row justify-center md:space-x-[0.3rem]">
                <span>Don’t let your computer memories consumes</span>
                <span>all of those browser tabs.</span>
              </span>
              <span className="flex flex-col md:flex-row justify-center md:space-x-[0.3rem]">
                <span>Findtrend let you gathers all of your favorite</span>
                <span>website into one place.</span>
              </span>
            </p>

            <div className="m-auto py-[1.3rem] md:py-[1.5rem] flex relative xl:py-[2rem]">
              <button className="rounded-[2.5rem] text-[0.875rem] font-bold h-[44px] w-[139px] bg-[#A8FF35] md:h-[57px] md:w-[180px] md:text-[1rem] lg:text-[1.125rem]">
                Get Started 🔥
              </button>

              <div className="hidden md:block border-[1px] w-[100px] text-center absolute top-[40%] translate-y-[-50%] left-[100%] translate-x-[20px] space-y-[3px]">
                <p
                  className={`text-white rotate-[6deg] ${goodDogNew.className} flex flex-col text-[0.875rem]`}
                >
                  <span>All research</span>
                  <span>start from here</span>
                </p>
                <span className="block">
                  <Arrow />
                </span>
              </div>
            </div>

            <div className="py-[2rem] flex justify-center items-center border-[1px] border-[#fff] xl:max-w-[1100px] m-auto xl:pb-[5rem] ">
              <Label />
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
