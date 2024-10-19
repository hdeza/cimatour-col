import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import LuggageOutlinedIcon from "@mui/icons-material/LuggageOutlined";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
export default function FeaturedWeather() {
  const refSection_1 = useRef(null);
  const isInView_1 = useInView(refSection_1, { once: false });

  const refSection_2 = useRef(null);
  const isInView_2 = useInView(refSection_2, { once: false });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        straggerChildren: 0.3,
      },
    },
  };
  return (
    <section className="flex flex-col  items-center bg-primary-white space-y-10 py-6 lg:space-y-14">
      <article className="flex  w-full font-roboto">
        <hr className=" border-gray-600 w-16 my-auto mr-2 lg:w-24" />
        <p className="text-sm text-gray-600 my-auto lg:text-lg">
          FEATURED WEATHER
        </p>
      </article>
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        ref={refSection_1}
        className="space-y-8 px-8 flex flex-col md:flex-row md:items-center md:space-y-0 lg:space-x-4 lg:px-12"
      >
        <motion.article
          initial={{ opacity: 0, y: -30 }}
          animate={isInView_1 ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 2,
            ease: [0.68, -0.55, 0.27, 1.55], // Easing personalizado (cubic-bezier),
            type: "spring",
            stiffness: 100, // Establece la rigidez para un movimiento más elástico
            damping: 15, // Damping menor para menos amortiguación
          }}
          className="md:w-1/2"
        >
          <h3 className="font-playfair text-4xl text-center font-semibold md:text-left lg:text-6xl ">
            <span className="text-primary-orange">Discover</span> the{" "}
            <span className="text-primary-orange">climate </span>
            and <span className="text-primary-orange">plan</span> your{" "}
            <span className="text-primary-orange">trip</span>
          </h3>
        </motion.article>
        <motion.article
          initial={{ opacity: 0, y: -30 }}
          animate={isInView_1 ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 2,
            ease: [0.68, -0.55, 0.27, 1.55], // Easing personalizado (cubic-bezier),
            type: "spring",
            stiffness: 100, // Establece la rigidez para un movimiento más elástico
            damping: 15, // Damping menor para menos amortiguación
          }}
          className="md:w-1/2  "
        >
          <p className="text-center font-roboto md:text-left lg:text-xl">
            Our application uses{" "}
            <span className="text-primary-orange">artificial intelligence</span>{" "}
            to offer you precise{" "}
            <span className="text-primary-orange">weather predictions</span>.
            With personalized recommendations, you can enjoy ideal activities
            according to the weather.{" "}
            <span className="text-primary-orange">Plan your trips</span>{" "}
            effectively and discover{" "}
            <span className="text-primary-orange">unique experiences</span> in
            each destination.
          </p>
        </motion.article>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        ref={refSection_2}
        className="flex flex-col md:flex-row md:text-left md:space-x-10 md:space-y-0 px-12 space-y-8 font-roboto items-center text-center lg:space-x-20 md:py-8"
      >
        <motion.article
          initial={{ opacity: 0, y: -30 }}
          animate={isInView_2 ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 2,
            ease: [0.68, -0.55, 0.27, 1.55], // Easing personalizado (cubic-bezier),
            type: "spring",
            stiffness: 100, // Establece la rigidez para un movimiento más elástico
            damping: 15, // Damping menor para menos amortiguación
          }}
          className="space-y-2 "
        >
          <FavoriteBorderOutlinedIcon
            className="text-primary-orange"
            style={{ fontSize: 40 }}
          />
          <p className="text-xl font-semibold lg:text-2xl">
            Personalized recommendations for your favorite activities
          </p>
          <p className="font-light lg:text-lg">
            Receive activity suggestions tailored to weather conditions
          </p>
        </motion.article>
        <motion.article
          initial={{ opacity: 0, y: -30 }}
          animate={isInView_2 ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 2,
            ease: [0.68, -0.55, 0.27, 1.55], // Easing personalizado (cubic-bezier),
            type: "spring",
            stiffness: 100, // Establece la rigidez para un movimiento más elástico
            damping: 15, // Damping menor para menos amortiguación
          }}
          className="space-y-2"
        >
          <WbSunnyOutlinedIcon
            className="text-primary-orange"
            style={{ fontSize: 40 }}
          />
          <p className="text-xl font-semibold lg:text-2xl">
            Accurate and up-to-date weather predictions
          </p>
          <p className="font-light lg:text-lg">
            Get real-time weather forecasts for your location
          </p>
        </motion.article>
        <motion.article
          initial={{ opacity: 0, y: -30 }}
          animate={isInView_2 ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 2,
            ease: [0.68, -0.55, 0.27, 1.55], // Easing personalizado (cubic-bezier),
            type: "spring",
            stiffness: 100, // Establece la rigidez para un movimiento más elástico
            damping: 15, // Damping menor para menos amortiguación
          }}
          className="space-y-2"
        >
          <LuggageOutlinedIcon
            className="text-primary-orange"
            style={{ fontSize: 40 }}
          />
          <p className="text-xl font-semibold lg:text-2xl">
            Simplified and effective trip planning
          </p>
          <p className="font-light lg:text-lg">
            Plan your trips with ease and confidence
          </p>
        </motion.article>
      </motion.section>
    </section>
  );
}
