import { Variants } from "framer-motion";

export const parentVariant: Variants = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      ease: "easeIn",
    },
  },
};

export const childVariant: Variants = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export const animateFunc = (num: number) => {
  return {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delay: num,
      },
    },
  };
};

export const headerP: Variants = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

export const secondHeaderVariant: Variants = {
  hide: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeIn",
    },
  },
};
