import useView from "@/hooks/useView";
import AnimatedText from "../AnimatedText/AnimatedText";
import Wrapper from "../Wrapper/Wrapper";

function Text({ open }: { open: boolean }) {
  const { isViewed, ref } = useView(0.5);

  return (
    <Wrapper classText="bg-white">
      <div
        ref={ref}
        className="py-[3rem] px-[1.125rem] font-bold text-[2.25rem] leading-[140%] lg:text-[4rem] md:px-[1.5rem] lg:px-[3rem] lg:py-[5rem] xl:px-[5rem]"
      >
        <span>
          <AnimatedText
            open={open}
            viewed={isViewed}
            text="Findtrend helps you to increase your "
            start={0}
          />
        </span>
        <span>
          <AnimatedText
            open={open}
            viewed={isViewed}
            text="productivity and reduce your computer's "
            start={38}
          />
        </span>
        <span>
          <AnimatedText
            open={open}
            viewed={isViewed}
            text="memory load,"
            start={79}
          />

          <span className="text-[#ADADAD]">
            <AnimatedText
              open={open}
              viewed={isViewed}
              text=" an application that can"
              start={92}
            />
          </span>
        </span>
        <span className="text-[#ADADAD]">
          <AnimatedText
            open={open}
            viewed={isViewed}
            text=" fulfill your daily browsing needs."
            start={117}
          />
        </span>
      </div>
    </Wrapper>
  );
}
export default Text;
