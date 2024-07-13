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
import { cards, data, platformData, tweets } from "./data";
import ArrowReverse from "@/components/assets/ArrowReverse";
import Tick from "@/components/assets/Tick";
import Pricing from "@/components/Pricing/Pricing";
import BlackLogo from "@/components/assets/BlackLogo";

export default function Home() {
  return (
    <div>
      <div className="bg-black relative">
        <div className="xl:max-w-[1400px] xl:mx-auto h-[100%] bg-no-repeat bg-center bg-hero-sm-pattern md:bg-hero-lg-pattern">
          <div className="relative lg:py-[1rem] lg:px-[3rem] xl:px-[3rem] lg:flex lg:justify-between items-center">
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

              <div className="hidden md:block w-[100px] text-center absolute top-[40%] translate-y-[-50%] left-[100%] translate-x-[20px] space-y-[3px]">
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

            <div className="py-[2rem] flex justify-center items-center xl:max-w-[1100px] m-auto xl:pb-[5rem] ">
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
        <div className="flex flex-col px-[1.125rem] py-[3rem] lg:py-[5rem] xl:py-[6rem] space-y-[2rem] md:space-y-[3rem]">
          <h1 className="text-[2rem] font-bold flex flex-col text-center leading-[112%] text-black md:flex-row md:justify-center md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem]">
            <span>Findtrend make</span>
            <span className="space">+1000 Startup grow</span>
          </h1>

          <div className="mx-auto grid grid-cols-2 [grid-gap:1rem] w-[100%] max-w-[500px] md:grid-cols-4 md:max-w-[700px] lg:[grid-gap:2rem]  xl:max-w-[1000px]">
            {data.map((el, i) => (
              <div
                key={i}
                className="bg-[#F5F5F5] rounded-[8px] p-[1rem] flex justify-center items-center lg:p-[1.5rem]"
              >
                <div>
                  <Image
                    src={`/${el.path}`}
                    alt={el.name}
                    height={0}
                    width={0}
                    className="h-[23px] w-[100px] md:h-[30px] md:w-[120px]"
                    sizes="100vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
      <Wrapper classText="bg-[#FAFAFA] px-[1.125rem] py-[3rem] md:py-[4rem] lg:py-[5rem]">
        <div className="space-y-[2rem] flex flex-col overflow-hidden md:space-y-[3rem] lg:space-y-[4rem]">
          <h1 className="text-center text-black font-bold text-[2.25rem] leading-[112%] md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem]">
            All platform connect to Findtrend
          </h1>

          <div className="flex space-x-[1rem] overflow-scroll max-w-[700px] w-[100%]  mx-auto md:overflow-auto md:max-w-[800px] lg:space-x-[1.3rem]">
            {platformData.map((el) => (
              <div
                key={el.name}
                className="hover:bg-[#A8FF35] h-[64px] w-[64px] flex-none bg-[#fff] rounded-[8px] flex items-center justify-center md:flex-auto lg:h-[80px] lg:w-[80px]"
              >
                <Image
                  src={`/${el.path}`}
                  alt={el.name}
                  height={0}
                  width={0}
                  className="h-[30px] w-[30px] lg:h-[40px] lg:w-[40px]"
                  sizes="100vw"
                />
              </div>
            ))}
          </div>

          <div className="md:max-w-[600px] md:mx-auto xl:max-w-[800px] space-y-[1rem] md:space-y-[1.3rem]">
            {tweets.map((el) => (
              <div key={el.name} className="">
                <Image
                  src={`/${el.path}`}
                  alt={""}
                  height={300}
                  width={400}
                  className="h-[auto] w-[100%]"
                  sizes="100vw"
                />
              </div>
            ))}
          </div>

          <button className="mx-auto h-[44px] w-[152px] items-center justify-center rounded-[40px] text-[0.825rem] text-[#fff] bg-[#000] md:h-[57px] md:w-[198px] md:text-[1.125rem]">
            View More Trend
          </button>
        </div>
      </Wrapper>

      <Wrapper classText="bg-black">
        <div className="px-[1.125rem] py-[3rem] md:py-[4rem] lg:py-[5rem] flex flex-col">
          <h1 className="text-white text-center text-[2.25rem] font-bold leading-[112%] md:text-[3rem] lg:text-[4rem]">
            Get your best deal
          </h1>

          <div className="xs:flex-col mx-auto mt-[2rem] flex relative border-[1px] flex-wrap justify-center items-center space-x-[1.5rem] md:mt-[3rem] lg:mt-[4rem]">
            <span className="block text-[1.125rem] text-white md:text-[1.3rem] lg:text-[1.5rem]">
              Monthly
            </span>
            <div className="bg-white h-[44px] w-[104px] rounded-[99px] md:h-[52px] flex items-center px-[10px]">
              <div className="h-[28px] w-[28px] md:h-[36px] md:w-[36px] bg-[#A8FF35] rounded-[99px] translate-x-[0%]"></div>
            </div>
            <span className="block text-[1.125rem] !text-gray-500 md:text-[1.3rem] lg:text-[1.5rem]">
              Yearly
            </span>

            <div className="top-[100%] absolute w-[64px] space-y-[1px] flex flex-col right-[1px] translate-y-[-5px] md:flex-col-reverse md:right-[auto] md:left-[100%] md:top-[50%] md:translate-x-[10px] md:translate-y-[-60%] md:space-y-[5px]">
              <div className="translate-x-[1px] md:translate-x-[-10px]">
                <span className="md:hidden">
                  <ArrowReverse />
                </span>
                <span className="hidden md:block">
                  <Arrow />
                </span>
              </div>
              <div
                className={`text-[0.75rem] text-white ${goodDogNew.className} mx-auto flex flex-col rotate-[6deg] md:text-[0.875rem] `}
              >
                <span>Save 10%</span>
                <span>per month</span>
              </div>
            </div>
          </div>

          <div className="mt-[6rem] space-y-[1.5rem] mx-auto md:mt-[4rem] md:space-y-[2rem] lg:space-y-[0] lg:[grid-gap:2rem] lg:grid lg:grid-cols-3">
            {cards.map((item, i) => (
              <Pricing data={item} key={i} />
            ))}
          </div>
        </div>
      </Wrapper>
      <Wrapper classText="bg-[#A8FF35]">
        <div className="px-[1.125rem] py-[3rem] md:py-[4rem] lg:py-[5rem] flex flex-col justify-center items-center">
          <div className="flex flex-col space-y-[2rem] lg:space-y-[3rem]">
            <h1 className="text-center flex flex-col text-[2.25rem] leading-[112%] font-bold md:text-[3rem] lg:text-[4.5rem]">
              <span className="text-black">Join us on email for</span>
              <span className="text-[#87D322]">more trending topics</span>
            </h1>
            <button className="font-bold mx-auto text-[0.875rem] rounded-[40px] text-white h-[44px] w-[106px] bg-black md:text-[1rem] md:h-[57px] md:w-[180px] lg:text-[1.125rem]">
              Join Now
            </button>
          </div>
        </div>
      </Wrapper>

      <Wrapper classText="bg-[#fff]">
        <div className="px-[1.125rem] py-[3rem] flex flex-col justify-center items-center space-y-[3rem] md:py-[4rem] lg:py-[2rem] lg:flex-row lg:space-y-0 lg:justify-normal">
          <h1 className="flex items-center space-x-[14px] ">
            <span>
              <BlackLogo />
            </span>
            <span className="font-bold text-[2rem] text-black">Findtread</span>
          </h1>
          <ul className="flex flex-col justify-center text-center space-y-[1.5rem] lg:flex-row lg:space-y-0 lg:ml-auto lg:space-x-[2rem]">
            <li>
              <a className="text-[1.125rem] text-black" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="text-[1.125rem] text-black" href="#">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a className="text-[1.125rem] text-black" href="#">
                Contact Us
              </a>
            </li>
            <li>
              <a className="text-[1.125rem] text-black" href="#">
                Careers
              </a>
            </li>
          </ul>
        </div>
      </Wrapper>
    </div>
  );
}
