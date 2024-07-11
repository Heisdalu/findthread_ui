import Tag from "./Tag";

const data = [
  {
    name: "Cryptopunk - Search",
    path: "twitter.png",
    classText:
      "rotate-[-4deg] z-[5] relative border-[#fff] xl:translate-x-[50px]",
  },
  {
    name: "Popular Design - Se",
    path: "pin.png",
    classText:
      "rotate-[2deg] relative z-[4] border-[#fff] xl:translate-y-[45px]",
  },
  {
    name: "Product Design - Sea",
    path: "fb.png",
    classText:
      "rotate-[-2deg] relative z-[3] border-[#fff] xl:translate-x-[-50px] xl:translate-y-[5px]",
  },
  {
    name: "Elon Musk - Search",
    path: "dribble.png",
    classText:
      "rotate-[4deg] relative  z-[2] border-[#fff] xl:translate-y-[50px] xl:translate-x-[-90px]",
  },
];

function Label() {
  return (
    <div className="border-[1px] border-white space-y-[5px] flex flex-col xl:flex-row ">
      {data.map((el) => (
        <Tag
          name={el.name}
          path={el.path}
          key={el.name}
          classText={el.classText}
        />
      ))}
    </div>
  );
}
export default Label;
