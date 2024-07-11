import localFont from "next/font/local";

const effraFont = localFont({
  src: [
    { path: "../fonts/Effra.woff2", weight: "400", style: "normal" },
    {
      path: "../fonts/Effra-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    { path: "../fonts/Effra-Heavy.woff2", weight: "600", style: "normal" },
    { path: "../fonts/Effra-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-effra",
  adjustFontFallback: "Arial",
});

const goodDogNew = localFont({
  src: [
    {
      path: "../fonts/GoodDog_new.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  adjustFontFallback: "Times New Roman",
});

export { effraFont as effra, goodDogNew };

// border-[#fff] border-[1px]
