import { prisma } from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    const allReservations = await prisma.reserva.findMany();
    return NextResponse.json(allReservations);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al crear la reserva" },
      { status: 500 }
    );
  }
};

export const POST = async (request: NextRequest) => {
  try {
    const { nombreCliente, apellidoCliente, descripcion, tipoCorte, plan } =
      await request.json();

    const newReservartion = await prisma.reserva.create({
      data: {
        nombreCliente,
        apellidoCliente,
        descripcion,
        plan,
        tipoCorte,
      },
    });

    return NextResponse.json(newReservartion);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error al crear la reserva" },
      { status: 500 }
    );
  }
};
