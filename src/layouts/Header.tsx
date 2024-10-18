import { motion } from "framer-motion";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false); // con esta variable manejaremos el estado si se abre o no el menu

  const toogleMenu = () => {
    setIsOpen(!isOpen); // cambiamos el estado del menu
  };

  return (
    <header
      style={{ height: "10vh" }}
      className="flex bg-gray-500/15 py-4 px-4 justify-between absolute z-10 w-full top-0 left-0"
    >
      <h1 className="font-playfair font-bold text-white text-2xl">
        Clima<span className="text-primary-orange">Tour</span>
      </h1>
      <button onClick={toogleMenu} className="">
        <MenuIcon className="text-white" />
      </button>
      <motion.div //seccion del menu hamburguesa animado
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 180, damping: 30 }}
        className="fixed top-0 right-0 w-52 h-full bg-white shadow-lg p-6 z-40"
      >
        <div className="space-y-4">
          <div className="flex justify-end">
            <button onClick={toogleMenu}>
              <CloseIcon className="hover:text-primary-orange" />
            </button>
          </div>
          <ul className="list-none space-y-3">
            <li>
              <Link to="/" className="hover:text-primary-orange">
                Home
              </Link>
            </li>
            <li>
              <Link to={"forecast"} className="hover:text-primary-orange">
                Weather Forecast
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </header>
  );
}
