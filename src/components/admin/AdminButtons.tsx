import React from 'react'

function AdminButtons() {
  return (
        <div className="flex justify-between items-center mt-auto">
              <button
                // onClick={() => onConfirm(reservation.id, "CONFIRMADO")}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Confirmar
              </button>
              <button
                // onClick={() => onReject(reservation.id)}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
              >
                Rechazar
              </button>
              <button
                // onClick={() => useDELETE(reservation.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Eliminar
              </button>
    </div>
  )
}

export default AdminButtons