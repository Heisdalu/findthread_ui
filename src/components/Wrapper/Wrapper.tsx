import { ReactNode } from "react";

function Wrapper({
  children,
  classText,
}: {
  children: ReactNode;
  classText?: string;
}) {
  return (
    <div className={classText}>
      <div className={`xl:max-w-[1400px] xl:mx-auto`}>{children}</div>
    </div>
  );
}
export default Wrapper;
