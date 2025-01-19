// Tipos Enum
export enum Plan {
  BRONCE = "BRONCE",
  PLATA = "PLATA",
  ORO = "ORO",
}

export enum Estado {
  PENDIENTE = "PENDIENTE",
  ACEPTADO = "ACEPTADO",
  RECHAZADO = "RECHAZADO",
}

// Tipo para la Reserva
export interface ReservationTypesDB {
  id: number; // Prisma usa Int para ID
  nombreCliente: string;
  apellidoCliente: string;
  descripcion: string;
  tipoCorte: string; // Esto puede ser un enum o string específico si tienes opciones predefinidas
  plan: Plan; // Enum Plan
  estado: Estado;
  horarioInicio?: Date | string; 
  horarioFin?: Date | string; 
  createdAt: Date;
  updatedAt: Date;
}

export type CreateRes = Omit<ReservationTypesDB, "id" | "createdAt" | "updateAt">

export type UpdateRes = Partial<CreateRes>