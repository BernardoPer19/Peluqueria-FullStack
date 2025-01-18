-- CreateTable
CREATE TABLE "Reserva" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombreCliente" TEXT NOT NULL,
    "apellidoCliente" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "tipoCorte" TEXT NOT NULL,
    "plan" TEXT NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'PENDIENTE',
    "horarioInicio" DATETIME,
    "horarioFin" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
