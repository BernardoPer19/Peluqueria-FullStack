import { useReservationContext } from "@/context/ReservationConext";
import Link from "next/link";
import React, { useState } from "react";

const AdminReservationsList = () => {
  const { reservations, useDELETE } = useReservationContext();
 

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas eliminar esta reserva?"
    );
    if (confirmDelete) {
      try {
        await useDELETE(id);
        alert("Reserva eliminada con éxito");
      } catch (error) {
        console.error("Error al eliminar la reserva:", error);
        alert("Hubo un error al intentar eliminar la reserva");
      }
    }
  };


  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Lista de Reservas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reservations.map((reservation) => (
          <div
            key={reservation.id}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between"
          >
            <h3 className="text-xl font-semibold mb-4">
              {reservation.nombreCliente} {reservation.apellidoCliente}
            </h3>
            <p className="text-gray-600 mb-4">
              <strong>Tipo de Corte:</strong> {reservation.tipoCorte}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Plan:</strong> {reservation.plan}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Estado:</strong> {reservation.estado}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Descripción:</strong> {reservation.descripcion}
            </p>

            <div className="flex justify-between items-center">
              <Link href={`/admin-page/${reservation.id}`}>
                <button className="px-5 py-3 bg-blue-500 text-center text-white rounded-md">
                  Ver Detalles
                </button>
              </Link>
              <button
                onClick={() => handleDelete(reservation.id)}
                className="px-5 py-3 bg-red-500 text-white rounded-md"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminReservationsList;
