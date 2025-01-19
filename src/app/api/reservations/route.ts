import { prisma } from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

export interface Params {
  params: { id: string };
}

export const GET = async () => {
  try {
    const allReservations = await prisma.reserva.findMany();
    return NextResponse.json(allReservations);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al cargar las reservas" },
      { status: 500 }
    );
  }
};

export const POST = async (request: NextRequest) => {
  try {
    const { nombreCliente, apellidoCliente, descripcion, tipoCorte, plan } =
      await request.json();

    const newReservation = await prisma.reserva.create({
      data: {
        nombreCliente,
        apellidoCliente,
        descripcion,
        plan,
        tipoCorte,
      },
    });

    return NextResponse.json(newReservation);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error al crear la reserva" },
      { status: 500 }
    );
  }
};

export const DELETE = async (req: Request) => {
  try {
    const { id } = await req.json(); // Leer el ID del cuerpo de la solicitud

    if (!id || isNaN(Number(id))) {
      return NextResponse.json(
        { error: "El ID debe ser un número válido." },
        { status: 400 }
      );
    }

    const deleteReservation = await prisma.reserva.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(deleteReservation);
  } catch (error: any) {
    console.error("Error al eliminar la reserva:", error);

    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "La reserva con el ID proporcionado no existe." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: `Error al eliminar la reserva: ${error.message}` },
      { status: 500 }
    );
  }
};
