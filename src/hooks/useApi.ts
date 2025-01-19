import { useCallback, useState } from "react";
import { FormData } from "@/types/FormType";
import { ReservationTypesDB, UpdateRes } from "@/types/ReservationType";

export const useApi = () => {
  const [reservations, setReservations] = useState<ReservationTypesDB[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nombreCliente: "",
    apellidoCliente: "",
    descripcion: "",
    tipoCorte: "",
    plan: "",
  });

  // Fetch para cargar datos
  const loadDataFetch = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/reservations");

      if (!res.ok) {
        throw new Error(`Error del servidor: ${res.status}`);
      }

      const text = await res.text(); // Usamos text() en vez de json() directamente
      const data = text ? JSON.parse(text) : []; // Verificamos que no sea vacío
      setReservations(data);
      setError(false);
    } catch (error) {
      console.error("Error al cargar datos:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  const usePOST = async () => {
    try {
      const newReservation = {
        nombreCliente: formData.nombreCliente,
        apellidoCliente: formData.apellidoCliente,
        descripcion: formData.descripcion,
        plan: formData.plan,
        tipoCorte: formData.tipoCorte,
      };

      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReservation),
      });

      if (!response.ok) {
        throw new Error("Error al crear la reserva");
      }

      const text = await response.text();
      const data = text ? JSON.parse(text) : {}; // Verificamos que no sea vacío
      setReservations((prev) => [...prev, data]);
      return data;
    } catch (error) {
      console.error("Error en la solicitud POST:", error);
      throw error;
    }
  };

  const useDELETE = async (id: number) => {
    try {
      const res = await fetch("/api/reservations", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) {
        throw new Error("Error al eliminar la reserva");
      }

      const text = await res.text();
      const data = text ? JSON.parse(text) : {}; // Verificamos que no sea vacío
      setReservations((prev) => prev.filter((res) => res.id !== id));
      return data;
    } catch (error) {
      console.error("Error en la solicitud DELETE:", error);
      throw error;
    }
  };

  const usePUT = async (id: number, reservation: UpdateRes) => {
    try {
      const response = await fetch(`/api/reservations/admin/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservation),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar la reserva");
      }

      const data = await response.json();

      // Actualiza el estado local para reflejar los cambios
      setReservations((prevReservations) =>
        prevReservations.map((reservation) =>
          reservation.id === id ? data : reservation
        )
      );
    } catch (error) {
      console.error("Error al actualizar la reserva:", error);
    }
  };

  return {
    reservations,
    setReservations,
    loading,
    setLoading,
    error,
    setError,
    formData,
    setFormData,
    loadDataFetch,
    usePOST,
    usePUT,
    useDELETE,
  };
};
