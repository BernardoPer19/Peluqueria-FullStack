"use client";
import Link from "next/link";
import { FaHome, FaUserAlt, FaUserShield } from "react-icons/fa"; // React Icons

function Navbar() {
  return (
    <nav className="bg-black text-white shadow-md py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo o Nombre de la Aplicación */}
        <Link href="/" className="text-3xl font-bold text-red-600">
          Mi Aplicación
        </Link>

        {/* Menú de navegación */}
        <div className="hidden md:flex space-x-10">
          <Link href="/" className="flex items-center space-x-2 text-lg hover:text-red-600 transition-all">
            <FaHome className="text-xl" />
            <span>Inicio</span>
          </Link>
          <Link href="/user-page" className="flex items-center space-x-2 text-lg hover:text-red-600 transition-all">
            <FaUserAlt className="text-xl" />
            <span>Usuario</span>
          </Link>
          <Link href="/admin-page" className="flex items-center space-x-2 text-lg hover:text-red-600 transition-all">
            <FaUserShield className="text-xl" />
            <span>Admin</span>
          </Link>
        </div>

        {/* Menú desplegable en móviles */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-white focus:outline-none"
            onClick={() => document.getElementById("mobile-menu")?.classList.toggle("hidden")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div className="md:hidden hidden" id="mobile-menu">
        <div className="flex flex-col space-y-4 px-6 py-4 bg-black text-white">
          <Link href="/" className="flex items-center space-x-2 text-lg hover:text-red-600 transition-all">
            <FaHome className="text-xl" />
            <span>Inicio</span>
          </Link>
          <Link href="/user-page" className="flex items-center space-x-2 text-lg hover:text-red-600 transition-all">
            <FaUserAlt className="text-xl" />
            <span>Lista de reeservas</span>
          </Link>
          <Link href="/admin-page" className="flex items-center space-x-2 text-lg hover:text-red-600 transition-all">
            <FaUserShield className="text-xl" />
            <span>Admin</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
