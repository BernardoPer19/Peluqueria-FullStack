import ReservationUserList from "@/components/users/ReservationList";
import UserForm from "@/components/users/UserForm";
import React from "react";

function UserPage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 p-8 flex flex-col gap-10">
      {/* <UserForm/> */}
      <ReservationUserList />
    </main>
  );
}

export default UserPage;
