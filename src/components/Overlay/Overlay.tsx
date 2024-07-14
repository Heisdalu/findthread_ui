import { useEffect } from "react";

let ctx: boolean | null = null;

if (typeof window !== "undefined") {
  window.addEventListener("load", () => {
    // contentLoaded = true;
    if (document.body) {
      document.body.classList.remove("overflow-hidden");
    }
    ctx = true;
  });
}

function Overlay({ open, toggleOpen }: { open: boolean; toggleOpen: any }) {

  useEffect(() => {
    console.log(ctx);
    if (ctx) {
      toggleOpen(true);
      //   console.log("done loading");
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
