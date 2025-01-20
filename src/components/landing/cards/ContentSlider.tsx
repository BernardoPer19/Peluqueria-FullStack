"use client";
import React from "react";

interface SliderProps {
  title: string;
  desc: string;
  backgroundImage: string;
  extraImg: string;
  btnText: string
}

function ContentSlider({
  title,
  desc,
  backgroundImage,
  extraImg,
  btnText
}: SliderProps) {
  return (
    <main
      className="relative flex items-center justify-start w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="flex gap-14 p-16 w-full max-w-screen-xl mx-auto">
        <div className="relative z-10 flex flex-col gap-6 w-[780px] text-white">
          <h1 className="text-5xl font-poppins font-extrabold leading-tight tracking-tight mb-4">
            {title}
          </h1>
          <p className="text-lg font-poppins mb-6 opacity-90">{desc}</p>
         <div className="flex gap-6">
         <button className="bg-red-600 hover:bg-red-500 transition-colors ease-in-out duration-300 text-white px-8 py-4 rounded-full shadow-md hover:shadow-xl transform hover:scale-105">
            {btnText}
          </button>
          <button className="bg-transparent border-2 border-red-500 hover:bg-red-500 transition-colors ease-in-out duration-500 text-white px-8 py-4 rounded-full shadow-md hover:shadow-xl transform hover:scale-105">
            Haz una llamada!
          </button>
         </div>
        </div>

        <div className="relative z-50">
          <img
            className="w-96 rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105"
            src={extraImg}
            alt=""
          />
        </div>
      </div>
    </main>
  );
}

export default ContentSlider;
