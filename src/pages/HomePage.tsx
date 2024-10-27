import { useEffect, useState } from "react";
import FeaturedDestination from "../layouts/FeaturedDestination";
import FeaturedWeather from "../layouts/FeaturedWeather";
import Header from "../layouts/Header";
import Main from "../layouts/Main";
import Loader from "@/components/common/Loader";
import { motion } from "framer-motion";
import { Testimonials } from "@/layouts/Testimonials";
import Footer from "@/layouts/Footer";
export default function HomePage() {
  const [loading, setLoading] = useState(true); // estado de carga inicial

  useEffect(() => {
    // Simular una carga de 2 segundos
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer); // Limpia el temporizador cuando el componente se desmonta
    };
  }, []);

  return (
    <>
      {loading && <Loader />}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={!loading ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 4,
          ease: [0.68, -0.55, 0.27, 1.55], // Easing personalizado (cubic-bezier),
          type: "spring",
          stiffness: 300, // Establece la rigidez para un movimiento más elástico
          damping: 30, // Damping menor para menos amortiguación
        }}
      >
        <Header isInHome={true} />
        <Main />
        <FeaturedWeather />
        <FeaturedDestination />
        <Testimonials />
        <Footer />
      </motion.div>
    </>
  );
}
