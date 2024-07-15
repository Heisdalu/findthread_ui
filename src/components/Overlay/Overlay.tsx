"use client";
import { useEffect } from "react";

function Overlay({ open, toggleOpen }: { open: boolean; toggleOpen: any }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.classList.remove("overflow-hidden");
      console.log("yssssss");
      toggleOpen(true);
    }
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
