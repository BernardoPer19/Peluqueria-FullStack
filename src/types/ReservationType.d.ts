
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
  horarioInicio?: Date; 
  horarioFin?: Date; 
  createdAt: Date;
  updatedAt: Date;
}

