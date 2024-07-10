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

export { effraFont as effra };

// border-[#fff] border-[1px]