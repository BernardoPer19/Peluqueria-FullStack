"use client"
import { useReservationContext } from "@/context/ReservationConext";
import React, { useState } from "react";

const UserForm = () => {
  
  const {formData,setFormData,usePOST, setReservations} = useReservationContext()

  const [errors, setErrors] = useState({
    nombreCliente: "",
    apellidoCliente: "",
    descripcion: "",
    tipoCorte: "",
    plan: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let formErrors = { ...errors };

   
    if (!formData.nombreCliente) formErrors.nombreCliente = "El nombre es obligatorio";
    else formErrors.nombreCliente = "";

    if (!formData.apellidoCliente) formErrors.apellidoCliente = "El apellido es obligatorio";
    else formErrors.apellidoCliente = "";

    if (!formData.descripcion) formErrors.descripcion = "La descripción es obligatoria";
    else formErrors.descripcion = "";

    if (!formData.tipoCorte) formErrors.tipoCorte = "El tipo de corte es obligatorio";
    else formErrors.tipoCorte = "";

    if (!formData.plan) formErrors.plan = "El plan es obligatorio";
    else formErrors.plan = "";

    setErrors(formErrors);


    return Object.values(formErrors).every((error) => error === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      console.log("Formulario enviado:", formData);
      
      const createdReservation  = usePOST()

      setReservations((prevRes) => [...prevRes, createdReservation])

      setFormData({
        nombreCliente: "",
        apellidoCliente: "",
        descripcion: "",
        tipoCorte: "",
        plan: "",
      });
    } else {
      console.log("Errores en el formulario");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl w-[800px] mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Formulario de Reserva</h2>

  
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col">
          <label htmlFor="nombreCliente" className="font-medium mb-2">Nombre</label>
          <input
            id="nombreCliente"
            name="nombreCliente"
            value={formData.nombreCliente}
            onChange={handleChange}
            className={`border rounded-lg p-3 ${errors.nombreCliente ? "border-red-500" : "border-gray-300"}`}
            placeholder="Ingrese su nombre"
          />
          {errors.nombreCliente && (
            <p className="text-red-500 text-sm mt-1">{errors.nombreCliente}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="apellidoCliente" className="font-medium mb-2">Apellido</label>
          <input
            id="apellidoCliente"
            name="apellidoCliente"
            value={formData.apellidoCliente}
            onChange={handleChange}
            className={`border rounded-lg p-3 ${errors.apellidoCliente ? "border-red-500" : "border-gray-300"}`}
            placeholder="Ingrese su apellido"
          />
          {errors.apellidoCliente && (
            <p className="text-red-500 text-sm mt-1">{errors.apellidoCliente}</p>
          )}
        </div>
      </div>

   
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col">
          <label htmlFor="descripcion" className="font-medium mb-2">Descripción</label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            className={`border rounded-lg p-3 ${errors.descripcion ? "border-red-500" : "border-gray-300"}`}
            placeholder="Describa lo que desea"
          />
          {errors.descripcion && (
            <p className="text-red-500 text-sm mt-1">{errors.descripcion}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="tipoCorte" className="font-medium mb-2">Tipo de Corte</label>
          <select
            id="tipoCorte"
            name="tipoCorte"
            value={formData.tipoCorte}
            onChange={handleChange}
            className={`border rounded-lg p-3 ${errors.tipoCorte ? "border-red-500" : "border-gray-300"}`}
          >
            <option value="">Seleccione...</option>
            <option value="Tijera">Tijera</option>
            <option value="Máquina">Máquina</option>
            <option value="Pintado">Pintado</option>
          </select>
          {errors.tipoCorte && (
            <p className="text-red-500 text-sm mt-1">{errors.tipoCorte}</p>
          )}
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="plan" className="font-medium mb-2">Plan</label>
        <select
          id="plan"
          name="plan"
          value={formData.plan}
          onChange={handleChange}
          className={`border rounded-lg p-3 ${errors.plan ? "border-red-500" : "border-gray-300"}`}
        >
          <option value="">Seleccione...</option>
          <option value="BRONCE">Bronce</option>
          <option value="PLATA">Plata</option>
          <option value="ORO">Oro</option>
        </select>
        {errors.plan && (
          <p className="text-red-500 text-sm mt-1">{errors.plan}</p>
        )}
      </div>

    
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition"
      >
        Enviar Reserva
      </button>
    </form>
  );
};

export default UserForm;
