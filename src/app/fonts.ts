// app/fonts.ts
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ["400", "500", "700", "600"],
  subsets: ["latin"],
  display: "swap", // Esto optimiza la carga de fuentes
});
