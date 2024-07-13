import Tag from "./Tag";
import { motion } from "framer-motion";

const data = [
  {
    name: "Cryptopunk - Search",
    path: "twitter.png",
    classText:
      "rotate-[-4deg] z-[5] relative border-[#fff] xl:translate-x-[50px]",
  },
  {
    name: "Popular Design - Se",
    path: "pin.png",
    classText:
      "rotate-[2deg] relative z-[4] border-[#fff] xl:translate-y-[45px]",
  },
  {
    name: "Product Design - Sea",
    path: "fb.png",
    classText:
      "rotate-[-2deg] relative z-[3] border-[#fff] xl:translate-x-[-50px] xl:translate-y-[5px]",
  },
  {
    name: "Elon Musk - Search",
    path: "dribble.png",
    classText:
      "rotate-[4deg] relative  z-[2] border-[#fff] xl:translate-y-[50px] xl:translate-x-[-90px]",
  },
];

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function Label() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      className="border-[1px] border-white space-y-[5px] flex flex-col xl:flex-row "
    >
      {data.map((el) => (
        <Tag
          name={el.name}
          path={el.path}
          key={el.name}
          classText={el.classText}
        />
      ))}
    </motion.div>
  );
}
export default Label;
