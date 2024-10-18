import Header from "../layouts/Header";
import valley from "../assets/valley.svg";
import EastIcon from "@mui/icons-material/East";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import LuggageOutlinedIcon from "@mui/icons-material/LuggageOutlined";
export default function HomePage() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeIn",
        type: "spring",
        bounce: 0.65,
        damping: 40,
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        straggerChildren: 0.3,
      },
    },
  };

  return (
    <>
      <Header />

      <section className="relative w-full min-h-screen">
        <img
          src={valley}
          alt="Imagen valle del cocora"
          className="absolute w-full h-full object-cover saturate-150"
        />
        <motion.article
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ height: "90dvh", top: "10dvh" }}
          className="w-full space-y-4 px-4 absolute flex flex-col text-center justify-center items-center text-white"
        >
          <motion.h2
            variants={textVariants}
            className="font-playfair text-4xl font-bold"
          >
            Discover the climate and plan your activities
          </motion.h2>
          <motion.p variants={textVariants} className="font-roboto">
            Get AI-powered weather forecast and personalized recommendations for
            your city
          </motion.p>
          <motion.div variants={textVariants} className="pt-10">
            <Link to="/forecast">
              <motion.button
                className="flex gap-2 items-center bg-white/30 rounded-full p-1.5 shadow-md"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "circOut" }}
              >
                <span className="font-roboto font-bold pl-2">Let's start!</span>
                <div className="bg-white p-2 rounded-full">
                  <EastIcon className="text-primary-orange" />
                </div>
              </motion.button>
            </Link>
          </motion.div>
        </motion.article>
      </section>

      <section className="flex flex-col items-center bg-primary-white space-y-10 py-6">
        <article className="flex  w-full font-roboto">
          <hr className=" border-gray-600 w-16 my-auto mr-2" />
          <p className="text-sm text-gray-600 my-auto">FEATURED WEATHER</p>
        </article>
        <section className="space-y-8 px-8 flex flex-col md:flex-row md:space-x-8">
          <article>
            <h3 className="font-playfair text-4xl text-center font-semibold">
              <span className="text-primary-orange">Discover</span> the{" "}
              <span className="text-primary-orange">climate </span>
              and <span className="text-primary-orange">plan</span> your{" "}
              <span className="text-primary-orange">trip</span>
            </h3>
          </article>
          <article>
            <p className="text-center font-roboto">
              Our application uses{" "}
              <span className="text-primary-orange">
                artificial intelligence
              </span>{" "}
              to offer you precise{" "}
              <span className="text-primary-orange">weather predictions</span>.
              With personalized recommendations, you can enjoy ideal activities
              according to the weather.{" "}
              <span className="text-primary-orange">Plan your trips</span>{" "}
              effectively and discover{" "}
              <span className="text-primary-orange">unique experiences</span> in
              each destination.
            </p>
          </article>
        </section>
        <section className="flex flex-col px-10 space-y-8 font-roboto items-center text-center">
          <article className="space-y-1">
            <FavoriteBorderOutlinedIcon
              className="text-primary-orange"
              style={{ fontSize: 35 }}
            />
            <p className="text-xl font-semibold">
              Personalized recommendations for your favorite activities
            </p>
            <p className="font-light">
              Receive activity suggestions tailored to weather conditions
            </p>
          </article>
          <article className="space-y-1">
            <WbSunnyOutlinedIcon
              className="text-primary-orange"
              style={{ fontSize: 35 }}
            />
            <p className="text-xl font-semibold">
              Accurate and up-to-date weather predictions
            </p>
            <p className="font-light">
              Get real-time weather forecasts for your location
            </p>
          </article>
          <article className="space-y-1">
            <LuggageOutlinedIcon
              className="text-primary-orange"
              style={{ fontSize: 35 }}
            />
            <p className="text-xl font-semibold">
              Simplified and effective trip planning
            </p>
            <p className="font-light">
              Plan your trips with ease and confidence
            </p>
          </article>
        </section>
      </section>
    </>
  );
}
