import Tick from "../assets/Tick";

type Props = {
  data: {
    type: string;
    group: string;
    sub_type: string;
    price: number;
    list: string[];
  };
};

const Pricing = ({ data: { type, sub_type, price, group, list } }: Props) => {
  return (
    <div className="bg-white flex flex-col p-[1rem] px-[1.5rem] max-w-[350px] h-[602px] rounded-[15px]">
      <div className="py-[1rem] pb-[1.5rem] space-y-[1rem]">
        <h1 className="text-[2rem] text-black font-medium leading-[100%] lg:text-[2.25rem]">
          {type}
        </h1>
        <p className="text-[1.125rem] text-black leading-[100%]">{sub_type}</p>
      </div>
      <div className="border-t-[1px] py-[1rem] space-y-[1rem]">
        <div className="space-x-[4px]">
          <span
            aria-label="price per month"
            className="xs:text-[2rem] font-medium text-[3.75rem] md:text-[4rem]"
          >
            ${price}
          </span>
          <span className="text-[1.125rem]" aria-hidden={true}>
            /Month
          </span>
        </div>
        <ul className="space-y-[1rem]">
          {list.map((el, i) => (
            <li
              key={i}
              className="flex items-center space-x-[1rem] leading-[1rem] md:leading-[1.3rem]"
            >
              <span aria-hidden={true}>
                <Tick />
              </span>
              <span className="xs:text-[0.75rem] text-[1rem] text-black md:text-[1.125rem]">
                {el}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto">
        <button className="bg-[#A8FF35] h-[54px] rounded-[27px] w-[100%] text-[1.125rem] font-bold xs:text-[1rem]">
          Start Free Trial
        </button>
      </div>
    </div>
  );
};
export default Pricing;
