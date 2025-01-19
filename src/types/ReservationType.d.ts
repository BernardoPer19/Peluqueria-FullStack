
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


export interface ReservationTypesDB {
  id: number; 
  nombreCliente: string;
  apellidoCliente: string;
  descripcion: string;
  tipoCorte: string;
  plan: Plan; 
  estado: Estado;
  horarioInicio?: Date | string; 
  horarioFin?: Date | string; 
  createdAt: Date;
  updatedAt: Date;
}

export type CreateRes = Omit<ReservationTypesDB, "id" | "createdAt" | "updateAt">

export type UpdateRes = Partial<CreateRes>