"use client";

import { useApi } from "@/hooks/useApi";
import React, { useEffect } from "react";
import { useReservationContext } from "@/context/ReservationConext";
import ReservationUserCard from "./ReservationUserCard";

function ReservationUserList() {
  const { loading, error } = useReservationContext();

 
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-100 to-blue-300">
        <p className="text-2xl font-semibold text-blue-600 animate-pulse">
          Cargando reservas...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-red-100">
        <p className="text-2xl font-semibold text-red-600">
          Error al cargar las reservas.
        </p>
      </div>
    );
  }

  return (
    <div className="">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        Lista de Reservas
      </h1>

      <ReservationUserCard />
    </div>
  );
}

export default ReservationUserList;
