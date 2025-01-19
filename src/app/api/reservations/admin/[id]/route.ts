import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export interface Params {
  params: { id: string };
}

  
export const PUT = async (request: Request, { params }: Params) => {
  try {
    const { horarioInicio, horarioFin, estado } = await request.json();

    if (!horarioInicio || !horarioFin || !estado) {
      return NextResponse.json(
        {
          error: "Faltan datos necesarios: horarioInicio, horarioFin o estado",
        },
        { status: 400 }
      );
    }


    const existingReservation = await prisma.reserva.findUnique({
      where: { 
        id: Number(params.id) 
      },
    });

    if (!existingReservation) {
      return NextResponse.json(
        { error: "Reserva no encontrada" },
        { status: 404 }
      );
    }

    const editUser = await prisma.reserva.update({
      where: { id: Number(params.id) },
      data: {
        estado,
        horarioInicio: new Date(horarioInicio),
        horarioFin: new Date(horarioFin),
      },
    });

    return NextResponse.json(editUser);
  } catch (error) {
    console.error("Error al actualizar la reserva:", error);
    return NextResponse.json(
      { error: "Error al añadir fechas o estados en la reserva" },
      { status: 500 }
    );
  }
};
