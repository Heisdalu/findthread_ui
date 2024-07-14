"use client";

import { secondHeaderVariant } from "@/utils";
import Wrapper from "../Wrapper/Wrapper";
import { delay, motion, Variants } from "framer-motion";
import { goodDogNew } from "@/app/font";
import ArrowDown from "../assets/ArrowDown";
import Arrow from "../assets/Arrow";
import Logo from "../assets/Logo";
import Close from "../assets/Close";
import ArrowUp from "../assets/ArrowUp";
import useView from "@/hooks/useView";

function SecondHeader({ open }: { open: boolean }) {
  const { isViewed, ref } = useView(1);
  const box = useView(1);
  const line = useView(1);

  const boxVariant: Variants = {
    hide: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const func = (num: number) => {
    return {
      hide: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: num,
        },
      },
    };
  };

  return (
    <Wrapper classText="bg-[#A8FF35] w-full">
      <div className="py-[5rem]  px-[1.125rem] md:py-[6rem] xl:py-[8rem]">
        <motion.h1
          variants={secondHeaderVariant}
          initial="hide"
          ref={ref}
          animate={isViewed && open ? "show" : ""}
          className=" text-center leading-[112%] font-bold text-[2rem] [text-shadow:0_3px_2px_#00000099] md:text-[2.5rem] xl:text-[4.5rem]"
        >
          Open new tabs is sh*t
        </motion.h1>

        <motion.div
          ref={box.ref}
          variants={boxVariant}
          initial={"hide"}
          animate={box.isViewed && open ? "show" : ""}
          className="bg-white my-[5.5rem] relative rounded-[14px] p-[1.5rem] max-w-[350px] mx-auto md:max-w-[500px] md:p-[3rem] xl:p-[4rem] lg:my-[4rem]"
        >
          <motion.div
            variants={func(0.3)}
            animate={box.isViewed && open ? "show" : ""}
            initial="hide"
            className="space-y-[5px] absolute bottom-[93%] right-[0] w-[99px] text-center lg:right-[auto] lg:left-[100%] lg:translate-x-[40px] lg:bottom-[auto] lg:top-[50%] lg:translate-y-[-50%]"
          >
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
          </motion.div>
          <div className="bg-[#030303] text-white space-x-[1rem] flex items-center justify-center py-[1.5rem]">
            <span className="*:w-[27px] *:h-[27px]">
              <Logo />
            </span>
            <span>Findtrend - Elon Musk</span>
            <Close />
          </div>

          <motion.div
            variants={func(0.5)}
            animate={box.isViewed && open ? "show" : ""}
            initial="hide"
            className="space-y-[3px] absolute top-[85%] left-[0] text-center flex flex-col items-center lg:top-[50%] lg:translate-y-[-50%] lg:left-[auto] lg:w-[95px] lg:right-[100%] lg:translate-x-[-30px]"
          >
            <span className="block lg:rotate-[40deg] ml-auto">
              <ArrowUp />
            </span>
            <span
              className={`${goodDogNew.className} md:text-[0.875rem] flex flex-col leading-[112%] text-[0.75rem] text-black rotate-[6deg]`}
            >
              <span> solution for</span>
              <span>discover a trend</span>
            </span>
          </motion.div>
        </motion.div>

        <motion.p
          variants={secondHeaderVariant}
          initial="hide"
          ref={line.ref}
          animate={line.isViewed && open ? "show" : ""}
          className="text-center max-w-[600px] mx-auto leading-[150%] text-[0.875rem] md:text-[1.125rem]"
        >
          A solution for your browser tabs and don’t make your device get slower
          over time. Get ease and faster to discover a trend with just one tab.
        </motion.p>
      </div>
    </Wrapper>
  );
}
export default SecondHeader;
