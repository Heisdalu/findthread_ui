import { motion, Variants } from "framer-motion";
const burger: Variants = {
  hide: {
    rotate: 0,
    translateX: 0,
  },
  show1: { rotate: 45, y: 3 },
  show2: { rotate: -45, y: -6 },
};

export default function HamBurger({
  click,
  toggleClick,
}: {
  click: boolean;
  toggleClick: any;
}) {
  return (
    <button
      onClick={() => toggleClick()}
      className="text-white h-[24px] w-[24px] flex flex-col space-y-[7px] items-center justify-center"
    >
      <motion.div
        variants={burger}
        initial="hide"
        animate={click ? "show1" : "hide"}
        className="h-[2px] w-[18px] bg-white"
      ></motion.div>
      <motion.div
        variants={burger}
        initial="hide"
        animate={click ? "show2" : "hide"}
        // initial={{ rotate: -60 }}
        className="h-[2px] w-[18px] bg-white"
      ></motion.div>
    </button>
  );
}
