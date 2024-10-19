import HamburguerButton from "../components/common/HamburguerButton";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type HeaderProps = {
  isInHome?: boolean;
};
export default function Header({ isInHome = false }: HeaderProps) {
  const isLgUp = useMediaQuery("(min-width:1024px");
  return (
    <header
      style={{ height: "10dvh" }}
      className="flex bg-gray-500/15 py-4 px-6 justify-between  items-center absolute z-10 w-full top-0 left-0"
    >
      <h1 className="font-playfair font-bold text-white text-2xl md:text-4xl">
        Clima<span className="text-primary-orange">Tour</span>
      </h1>
      {isLgUp ? (
        <motion.nav className="text-lg font-bold pr-5">
          <ul className="flex space-x-10">
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <Link
                to={"/"}
                className="text-white hover:text-primary-orange transition-colors duration-300"
              >
                Home
              </Link>
              {isInHome && <hr className="border-primary-orange" />}
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <a
                href="#"
                className="text-white hover:text-primary-orange transition-colors duration-300"
              >
                Destinations
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, color: "primary-orange" }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <Link
                to={"forecast"}
                className="text-white hover:text-primary-orange transition-colors duration-300"
              >
                Forecast
              </Link>
              {!isInHome && <hr className="border-primary-orange" />}
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <a
                href="#"
                className="text-white hover:text-primary-orange transition-colors duration-300"
              >
                Blog
              </a>
            </motion.li>
          </ul>
        </motion.nav>
      ) : (
        <HamburguerButton />
      )}
    </header>
  );
}
