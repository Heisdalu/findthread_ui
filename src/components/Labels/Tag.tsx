// import Twitter from '/'

import Image from "next/image";
import Close from "../assets/Close";

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
    <div
      className={`${classText} flex items-center justify-center text-[1.2775rem] space-x-[1rem] bg-[#181818] w-[290px] h-[70px] shadow-[3px_12px_5px_0px_rgba(0,0,0,0.75)] md:text-[1.3rem]  xl:w-[300px]`}
    >
      <div>
        <Image src={`/${path}`} alt={name} width={25} height={25} />
      </div>
      <div className="text-white relative">{name}</div>
      <div>
        <Close />
      </div>
    </div>
  );
}
export default Tag;
