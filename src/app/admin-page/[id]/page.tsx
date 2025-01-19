"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useReservationContext } from "@/context/ReservationConext";
import { formatDate } from "@/utils/horas";

function ReservationDetails() {
  const { reservations, usePUT } = useReservationContext();
  const { id } = useParams();
  const reservation = reservations.find((res) => res.id.toString() === id);

  // Estados locales para manejar los inputs
  const [estado, setEstado] = useState(reservation?.estado || "");
  const [horarioInicio, setHorarioInicio] = useState(
    reservation?.horarioInicio || ""
  );
  const [horarioFin, setHorarioFin] = useState(
    reservation?.horarioFin || ""
  );

  if (!reservation) {
    return (
      <div className="max-w-3xl mx-auto p-6 bg-red-100 text-red-700 rounded-lg shadow-md">
        No se encontró la reserva.
      </div>
    );
  }

  // Función para manejar la actualización
  const handleUpdate = async () => {
    try {
      const updateData = {
        estado,
        horarioInicio,
        horarioFin,
      };
      await usePUT(Number(id), updateData);
      alert("Reserva actualizada con éxito");
    } catch (error) {
      console.error("Error al actualizar la reserva:", error);
      alert("Hubo un error al actualizar la reserva");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Detalles de la Reserva</h1>

      <div className="space-y-4">
        <p className="text-lg">
          <strong>Nombre del Cliente:</strong> {reservation.nombreCliente}{" "}
          {reservation.apellidoCliente}
        </p>
        <p className="text-lg">
          <strong>Tipo de Corte:</strong> {reservation.tipoCorte}
        </p>
        <p className="text-lg">
          <strong>Plan de Pago:</strong> {reservation.plan}
        </p>
        <p className="text-lg">
          <strong>Estado:</strong>{" "}
          <span
            className={`${
              estado === "ACEPTADO"
                ? "text-green-600"
                : estado === "RECHAZADO"
                ? "text-red-600"
                : "text-gray-600"
            }`}
          >
            {estado}
          </span>
        </p>
        <p className="text-lg">
          <strong>Descripción:</strong> {reservation.descripcion}
        </p>

        <div>
          <p className="text-sm text-gray-500">Horario de Inicio:</p>
          <input
            type="datetime-local"
            value={horarioInicio}
            onChange={(e) => setHorarioInicio(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <p className="text-sm text-gray-500">Horario de Fin:</p>
          <input
            type="datetime-local"
            value={horarioFin}
            onChange={(e) => setHorarioFin(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Estado
          </label>
          <select
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            className="border p-2 rounded w-full"
          >
            <option value="PENDIENTE">Pendiente</option>
            <option value="ACEPTADO">Aceptado</option>
            <option value="RECHAZADO">Rechazado</option>
          </select>
        </div>

        <button
          onClick={handleUpdate}
          className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
        >
          Actualizar Reserva
        </button>
      </div>
    </div>
  );
}

export default ReservationDetails;
