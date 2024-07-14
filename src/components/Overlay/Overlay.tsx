import { useEffect } from "react";


let ctx: boolean | null = null;

if (typeof window !== "undefined") {
  window.addEventListener("load", () => {
    // contentLoaded = true;
    ctx = true;
    console.log("loaded completely");
  });
}

function Overlay({ open, toggleOpen }: { open: boolean; toggleOpen: any }) {
  //   const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(ctx);
  }, []);

  return (
    !open && (
      <div className="h-[100vh] fixed top-[0] bg-blue-500 grid place-items-center z-[120] w-[100%] overflow-hidden">
        <button onClick={() => toggleOpen(true)}>Click me</button>
      </div>
    )
  );
}
export default Overlay;
