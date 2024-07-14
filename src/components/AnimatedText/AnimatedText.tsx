import { Variants, motion } from "framer-motion";

function AnimatedText({
  text,
  open,
  viewed,
  start,
}: {
  text: string;
  open: boolean;
  viewed: boolean;
  start: number;
}) {
  const func = (value: number) => {
    return {
      hide: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: (value + start) * 0.05,
          ease: "linear",
        },
      },
    } as Variants;
  };

  const word = text.split("").map((el, i) => (
    <motion.span
      variants={func(i)}
      key={i}
      animate={open && viewed ? "show" : ""}
      initial="hide"
    >
      {el}
    </motion.span>
  ));

  return word;
}
export default AnimatedText;
