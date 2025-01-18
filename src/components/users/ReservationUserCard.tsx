import { useReservationContext } from "@/context/ReservationConext";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/16/solid";

import React from "react";

function ReservationUserCard() {
  const { reservations } = useReservationContext();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {reservations.map((res) => (
        <div
          key={res.id}
          className={`relative bg-white shadow-lg rounded-lg p-6 border-t-4 transition-transform transform hover:scale-105 cursor-pointer ${
            res.estado === "ACEPTADO"
              ? "border-green-500"
              : res.estado === "RECHAZADO"
              ? "border-red-500"
              : "border-yellow-500"
          }`}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
              {res.estado === "ACEPTADO" ? (
                <CheckCircleIcon className="w-8 h-8 text-green-500" />
              ) : res.estado === "RECHAZADO" ? (
                <XCircleIcon className="w-8 h-8 text-red-500" />
              ) : (
                <ExclamationCircleIcon className="w-8 h-8 text-yellow-500" />
              )}
            </div>

            <div>
              <p className="text-lg font-semibold text-gray-700">
                {res.nombreCliente} {res.apellidoCliente}
              </p>
              <p className="text-sm text-gray-500">{res.plan} Plan</p>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm text-gray-500">Descripción:</p>
            <p className="text-gray-800">{res.descripcion}</p>
          </div>
          <div className="mb-4">
            <p className="text-sm text-gray-500">Tipo de Corte:</p>
            <p className="text-gray-800">{res.tipoCorte}</p>
          </div>

          <div className="absolute top-4 right-4">
            <span
              className={`px-3 py-1 text-xs font-bold uppercase rounded-full ${
                res.estado === "ACEPTADO"
                  ? "bg-green-100 text-green-600"
                  : res.estado === "RECHAZADO"
                  ? "bg-red-100 text-red-600"
                  : "bg-yellow-100 text-yellow-600"
              }`}
            >
              {res.estado}
            </span>
          </div>

          {res.estado === "ACEPTADO" && res.horarioInicio && (
            <div className="mb-4">
              <p className="text-sm text-gray-500">Horario de Inicio:</p>
              <p className="text-gray-800">
                {new Date(res.horarioInicio).toLocaleString("es-ES", {
                  weekday: "long", // Día de la semana
                  year: "numeric",
                  month: "long", // Mes completo
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false, // Usar formato 24 horas
                })}
              </p>
            </div>
          )}
          {res.estado === "ACEPTADO" && res.horarioFin && (
            <div className="mb-4">
              <p className="text-sm text-gray-500">Horario de Inicio:</p>
              <p className="text-gray-800">
                {new Date(res.horarioFin).toLocaleString("es-ES", {
                  weekday: "long", // Día de la semana
                  year: "numeric",
                  month: "long", // Mes completo
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false, // Usar formato 24 horas
                })}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ReservationUserCard;
