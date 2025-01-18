import React from "react";


const loadReservations  = async () => {
    const res = await fetch("http://localhost:3000/api/reservations/")
    const data = await res.json()
    return data
}



function ReservationUserList() {

    const reservations = loadReservations()

  return (
    <div className="m-auto max-w-[1280px]">
      <h1>ReservationList</h1>

      <div className="flex gap-7 w-[90%] p-5 flex-col">
        <div className="flex gap-5 bg-blue-300 px-7 py-7 w-full items-center justify-between">
          <p>name</p>
          <p>lastnamne</p>
          <p>cut type</p>
          <p>plan</p>
          <span>confirmado</span>
        </div>

        <div className="w-full flex justify-between items-center gap-5 px-7 py-7 bg-red-700">
          <p>jakini</p>
          <p>peredow</p>
          <p>midle part</p>
          <p>ORO</p>
          <span>confirmado</span>
        </div>
        
        <div className="w-full flex justify-between items-center gap-5 px-7 py-7 bg-red-700">
          <p>joe</p>
          <p>roman</p>
          <p>tijeras</p>
          <p>PLATA</p>
          <span>pendiente</span>
        </div>
      </div>
   
    </div>
  );
}

export default ReservationUserList;
