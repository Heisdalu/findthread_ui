// import Twitter from '/'

import Image from "next/image";
import Close from "../assets/Close";
import { motion } from "framer-motion";

const childVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function Tag({
  name,
  path,
  classText,
}: {
  name: string;
  path: string;
  classText: string;
}) {
  return (
    <motion.div
      variants={childVariants}
      className={`${classText} px-[1rem] flex items-center justify-center text-[1.2775rem] space-x-[1rem] bg-[#181818] max-w-[290px] h-[70px] shadow-[3px_12px_5px_0px_rgba(0,0,0,0.75)] md:text-[1.3rem] xl:w-[300px] xl:px-[0]`}
    >
      <div>
        <Image
          src={`/${path}`}
          alt={name}
          width={25}
          height={25}
          loading="eager"
        />
      </div>
      <div className="text-white relative line-clamp-1 xl:line-clamp-none">
        {name}
      </div>
      <div>
        <Close />
      </div>
    </motion.div>
  );
}
export default Tag;
