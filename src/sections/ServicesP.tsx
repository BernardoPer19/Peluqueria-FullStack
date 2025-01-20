"use client";
import React from "react";
import { FaPaintBrush, FaUserTie } from "react-icons/fa"; // Iconos de react-icons
import { FaScissors } from "react-icons/fa6";

function ServicesP() {
  return (
    <section style={{ backgroundColor: "#323232" }}  className="py-20 text-white">
      <div   className=" mx-auto px-6 text-center flex flex-col items-center justify-center h-screen">
        <h2 className="text-5xl text-red-600 font-semibold mb-16">
          Nuestros Servicios
        </h2>

        <div className="flex justify-center gap-12 flex-wrap">
          {/* Card 1 - Corte a Tijera */}
          <div className="service-card bg-green-900 p-10 rounded-lg shadow-xl w-[280px] text-center transform transition-all duration-300 hover:scale-105">
            <div className="icon text-8xl text-red-500 mb-6 flex justify-center items-center">
              <FaScissors />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#222222]">Corte a Tijera</h3>
            <p className="text-lg opacity-90 mb-6 text-[#303030]">
              ¡Transforma tu look con un corte personalizado! Da un estilo único a tu cabello con nuestras tijeras de precisión.
            </p>
            <button className="bg-red-600 hover:bg-red-500 text-white py-2 px-6 rounded-md font-semibold transition duration-300">
              ¡Reserva Ahora!
            </button>
          </div>

          {/* Card 2 - Corte a Máquina */}
          <div className="service-card bg-green-900 p-10 rounded-lg shadow-xl w-[280px] text-center transform transition-all duration-300 hover:scale-105">
            <div className="icon text-8xl text-red-500 mb-6 flex justify-center items-center">
              <FaUserTie />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#222222]">Corte a Máquina</h3>
            <p className="text-lg opacity-90 mb-6 text-[#303030]">
              Rápido, preciso y moderno. Un corte de máquina ideal para quienes buscan eficiencia y estilo.
            </p>
            <button className="bg-red-600 hover:bg-red-500 text-white py-2 px-6 rounded-md font-semibold transition duration-300">
              ¡Agenda tu Hora!
            </button>
          </div>

          {/* Card 3 - Pintado de Cabello */}
          <div className="service-card bg-green-900 p-10 rounded-lg shadow-xl w-[280px] text-center transform transition-all duration-300 hover:scale-105">
            <div className="icon text-8xl text-red-500 mb-6 flex justify-center items-center">
              <FaPaintBrush />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#222222]">Pintado de Cabello</h3>
            <p className="text-lg opacity-90 mb-6 text-[#303030]">
              Dale vida a tu cabello con nuestros colores vibrantes y técnicas profesionales. ¡El cambio que buscas!
            </p>
            <button className="bg-red-600 hover:bg-red-500 text-white py-2 px-6 rounded-md font-semibold transition duration-300">
              ¡Pinta tu Estilo!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesP;
