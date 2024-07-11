import HamBurger from "@/components/HamBurger/HamBurger";
import Label from "@/components/Labels/Label";
import Arrow from "@/components/assets/Arrow";
import Logo from "@/components/assets/Logo";
import { goodDogNew } from "@/app/font";
import NavBar from "@/components/NavBar/NavBar";
import Wrapper from "@/components/Wrapper/Wrapper";
import Close from "@/components/assets/Close";
import ArrowDown from "@/components/assets/ArrowDown";
import ArrowUp from "@/components/assets/ArrowUp";
import Image from "next/image";
import { data } from "./data";

export default function Home() {
  return (
    <div>
      <div className=" border-1 bg-black relative">
        <div className="xl:max-w-[1400px] xl:mx-auto h-[100%] bg-no-repeat bg-center bg-hero-sm-pattern md:bg-hero-lg-pattern">
          <div className="relative lg:py-[1rem] lg:pr-[2rem] xl:px-[3rem] lg:flex lg:justify-between items-center">
            <NavBar />
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

      <Wrapper classText="bg-[#A8FF35] w-full">
        <div className="py-[5rem]  px-[1.125rem] md:py-[6rem] xl:py-[8rem]">
          <h1 className=" text-center leading-[112%] font-bold text-[2rem] [text-shadow:0_3px_2px_#00000099] md:text-[2.5rem] xl:text-[4.5rem]">
            Open new tabs is sh*t
          </h1>

          <div className="bg-white my-[5.5rem] relative rounded-[14px] p-[1.5rem] max-w-[350px] mx-auto md:max-w-[500px] md:p-[3rem] xl:p-[4rem] lg:my-[4rem]">
            <div className="space-y-[5px] absolute bottom-[93%] right-[0] w-[99px] text-center lg:right-[auto] lg:left-[100%] lg:translate-x-[40px] lg:bottom-[auto] lg:top-[50%] lg:translate-y-[-50%]">
              <span
                className={`${goodDogNew.className} leading-[112%] md:text-[0.875rem] block text-[0.75rem] text-black rotate-[6deg]`}
              >
                You just need one tab now
              </span>
              <span className="block translate-x-[-7px]">
                <span className="lg:hidden">
                  <ArrowDown />
                </span>
                <span className="fill hidden lg:block">
                  <Arrow />
                </span>
              </span>
            </div>
            <div className="bg-[#030303] text-white space-x-[1rem] flex items-center justify-center py-[1.5rem]">
              <span className="*:w-[27px] *:h-[27px]">
                <Logo />
              </span>
              <span>Findtrend - Elon Musk</span>
              <Close />
            </div>

            <div className="space-y-[3px] absolute top-[85%] left-[0] text-center flex flex-col items-center lg:top-[50%] lg:translate-y-[-50%] lg:left-[auto] lg:w-[95px] lg:right-[100%] lg:translate-x-[-30px]">
              <span className="block lg:rotate-[40deg] ml-auto">
                <ArrowUp />
              </span>
              <span
                className={`${goodDogNew.className} md:text-[0.875rem] flex flex-col leading-[112%] text-[0.75rem] text-black rotate-[6deg]`}
              >
                <span> solution for</span>
                <span>discover a trend</span>
              </span>
            </div>
          </div>

          <p className="text-center max-w-[600px] mx-auto leading-[150%] text-[0.875rem] md:text-[1.125rem]">
            A solution for your browser tabs and don’t make your device get
            slower over time. Get ease and faster to discover a trend with just
            one tab.
          </p>
        </div>
      </Wrapper>
      <Wrapper classText="bg-white">
        <div className="py-[3rem] px-[1.125rem] font-bold text-[2.25rem] leading-[140%] lg:text-[4rem] lg:px-[3rem] lg:py-[5rem] xl:px-[5rem]">
          <span>Findtrend helps you to increase your </span>
          <span>productivity and reduce your computer&apos;s </span>
          <span>
            memory load,{" "}
            <span className="text-[#ADADAD]"> an application that can </span>
          </span>
          <span className="text-[#ADADAD]">
            fulfill your daily browsing needs.
          </span>
        </div>
      </Wrapper>
      <Wrapper classText="bg-white">
        <div className="flex flex-col border-1 px-[1.125rem] py-[3rem] lg:py-[5rem] space-y-[2rem] md:space-y-[3rem]">
          <h1 className="text-[2rem] font-bold flex flex-col text-center leading-[112%] text-black md:flex-row md:justify-center md:text-[3rem] xl:text-[4rem]">
            <span>Findtrend make</span>
            <span className="space">+1000 Startup grow</span>
          </h1>

          <div className="mx-auto grid grid-cols-2 [grid-gap:1rem] w-[100%] max-w-[500px] md:grid-cols-4 md:max-w-[700px] lg:[grid-gap:2rem]  xl:max-w-[1000px]">
            {data.map((el, i) => (
              <div
                key={i}
                className="bg-[#F5F5F5] rounded-[8px] p-[1rem] flex justify-center items-center"
              >
                <div>
                  <Image
                    src={`/${el.path}`}
                    alt={el.name}
                    height={20}
                    width={100}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
