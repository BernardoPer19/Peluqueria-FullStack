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
    estado: Estado; // Enum Estado con un valor predeterminado
    horarioInicio?: Date; // Opcional
    horarioFin?: Date; // Opcional
    createdAt: Date;
    updatedAt: Date;
  }
  

  export type ReservationTypes = Omit<ReservationTypesDB, "id","horarioInicio", "horarioFin", "createdAt", "updatedAt">