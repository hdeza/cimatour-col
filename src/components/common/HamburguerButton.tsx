import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@mui/material";
export default function HamburguerButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false); // con esta variable manejaremos el estado si se abre o no el menu
  const isMdUp = useMediaQuery("(min-width:768px");
  // useRef: Se utiliza para referenciar el elemento <motion.div>, que es el contenedor del menú.
  // Esto permite verificar si el clic ocurre dentro o fuera de este elemento.
  const menuRef = useRef<HTMLDivElement>(null);
  const toogleMenu = () => {
    setIsOpen(!isOpen); // cambiamos el estado del menu
  };

  // handleClickOutside: Esta función detecta si el clic ocurre fuera del menú usando la referencia menuRef.
  // Si el clic ocurre fuera, cambia el estado de isOpen a false, cerrando el menú.
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false); // Cerrar el menú si se hace clic fuera de él
    }
  };

  // useEffect: El useEffect agrega el listener "mousedown" al documento solo cuando el menú está abierto (isOpen === true).
  // Este listener detecta clics en cualquier parte de la pantalla.
  // Cuando el menú se cierra, el listener se elimina para evitar comportamientos no deseados.
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup al desmontar el componente
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <button onClick={toogleMenu} className="">
        <MenuIcon
          className="text-white"
          style={{ fontSize: isMdUp ? 45 : 30 }}
        />
      </button>
      <motion.div //seccion del menu hamburguesa animado
        ref={menuRef} // Asignamos el ref al div del menú
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 180, damping: 30 }}
        className="fixed top-0 right-0 w-52 md:w-64 h-full bg-white shadow-lg p-6 z-40"
      >
        <div className="space-y-4">
          <div className="flex justify-end">
            <button onClick={toogleMenu}>
              <CloseIcon
                className="hover:text-primary-orange"
                style={{ fontSize: isMdUp ? 35 : 25 }}
              />
            </button>
          </div>
          <ul className="list-none space-y-5 md:text-xl">
            <li>
              <Link to="/" className="hover:text-primary-orange">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-primary-orange">
                Destinations
              </Link>
            </li>
            <li>
              <Link to={"forecast"} className="hover:text-primary-orange">
                Weather Forecast
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-primary-orange">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
}
