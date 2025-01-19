import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export interface Params {
  params: { id: string };
}

// const GET = async ({params}: Params) => {
//     const ReservationByID = prisma.reserva.findFirst()
// }

// export const DELETE = async (req: Request, { params }: Params) => {
//     try {
//       const { id } = params;  // Aquí extraemos el ID de los params
      
//       if (!id || isNaN(Number(id))) {
//         return NextResponse.json(
//           { error: "El ID de la reserva debe ser un número válido." },
//           { status: 400 }
//         );
//       }
  
//       const deleteReservation = await prisma.reserva.delete({
//         where: { id: Number(id) },
//       });
  
//       return NextResponse.json(deleteReservation);
  
//     } catch (error: any) {
//       console.error("Error al eliminar la reserva:", error);
      
//       if (error.code === "P2025") {
//         return NextResponse.json(
//           { error: "La reserva con el ID proporcionado no existe." },
//           { status: 404 }
//         );
//       }
  
//       return NextResponse.json(
//         { error: `Error al eliminar la reserva: ${error.message}` },
//         { status: 500 }
//       );
//     }
//   };
  
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

    // Verifica si la reserva existe
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
