import { useInView } from "framer-motion";
import { useRef } from "react";

const useView = (value?: number) => {
  const ref = useRef(null);
  const isViewed = useInView(ref, { once: true, amount: value || 0 });

  return { isViewed, ref };
};
export default useView;
