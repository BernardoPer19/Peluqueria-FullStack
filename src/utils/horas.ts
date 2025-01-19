// Función para convertir fechas a formato Date
export const convertToDate = (date: Date | string): Date => {
    if (typeof date === "string") {
      return new Date(date); // Asegura que siempre sea un objeto Date
    }
    return date;
  };
  
  // Función para formatear fechas de manera legible
export  const formatDate = (date: Date | string): string => {
    const validDate = convertToDate(date);
    return validDate.toLocaleString("es-ES", {
      weekday: "long",
      year: "numeric",
      month: "long", // Mes completo
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false, // Formato 24 horas
    });
  };
  