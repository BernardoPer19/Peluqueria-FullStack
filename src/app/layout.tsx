import { Metadata } from "next";
import ReservationContextProvider from "@/context/ReservationConext";
import "./globals.css"; // Importa el archivo global CSS  
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-poppins">
        <Navbar/>
          <ReservationContextProvider>{children}</ReservationContextProvider>
      </body>
    </html>
  );
}
