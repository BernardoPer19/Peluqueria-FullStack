import { useCallback, useState } from "react";
import { ReservationTypes } from "@/types/ReservationType";
import { FormData } from "@/types/FormType";

export const useApi = () => {
  const [reservations, setReservations] = useState<ReservationTypes[]>([]);
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

      const data = await res.json();
      setReservations(data);
      setError(false);
    } catch (error) {
      console.error("Error al cargar datos:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []); 

  // Función POST
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

      const data = await response.json();
      setReservations((prev) => [...prev, data]);
      return data;
    } catch (error) {
      console.error("Error en la solicitud POST:", error);
      throw error;
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
  };
};
