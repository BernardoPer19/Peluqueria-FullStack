"use client";
import React, { createContext, useContext, useEffect } from "react";
import { useApi } from "@/hooks/useApi";

import { FormData } from "@/types/FormType";
import { ReservationTypesDB, UpdateRes } from "@/types/ReservationType";

// Tipo para los children del proveedor
interface ChildrenType {
  children: React.ReactNode;
}

// Tipo para el contexto
interface ContextTypes {
  reservations: ReservationTypesDB[];
  setReservations: React.Dispatch<React.SetStateAction<ReservationTypesDB[]>>;
  loading: boolean;
  error: boolean;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  usePOST: () => Promise<void>;
  loadDataFetch: () => Promise<void>;
  usePUT: (
    id: number,
    reservation: UpdateRes
  ) => Promise<void>;
  useDELETE: (id: number) => Promise<void>;
}

const ReservationContext = createContext<ContextTypes | undefined>(undefined);

function ReservationContextProvider({ children }: ChildrenType) {
  const {
    reservations,
    setReservations,
    loading,
    error,
    formData,
    setFormData,
    usePOST,
    loadDataFetch,
    useDELETE,
    usePUT,
  } = useApi();

  useEffect(() => {
    loadDataFetch(); // Cargar reservas al iniciar
  }, [loadDataFetch]);

  const value: ContextTypes = {
    reservations,
    setReservations,
    loading,
    error,
    formData,
    setFormData,
    usePOST,
    loadDataFetch,
    useDELETE,
    usePUT,
  };

  return (
    <ReservationContext.Provider value={value}>
      {children}
    </ReservationContext.Provider>
  );
}

// Hook para usar el contexto
export const useReservationContext = () => {
  const context = useContext(ReservationContext);
  if (context === undefined) {
    throw new Error(
      "useReservationContext debe ser usado dentro de ReservationContextProvider"
    );
  }
  return context;
};

export default ReservationContextProvider;
