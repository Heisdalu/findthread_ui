"use client";
import { useEffect } from "react";

function Overlay({ open, toggleOpen }: { open: boolean; toggleOpen: any }) {
  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (typeof window !== "undefined") {
      timer = setTimeout(() => {
        document.body.classList.remove("overflow-hidden");
        console.log("yssssss");
        toggleOpen(true);
      }, 4000);
    }

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    !open && (
      <div className="h-[100vh] fixed top-[0] bg-[#A8FF35] grid place-items-center z-[120] w-[100%] overflow-hidden">
        <button>
          <span className="text-[3rem] font-bold animate-pulse">Findtread</span>
        </button>
      </div>
    )
  );
}
export default Overlay;
