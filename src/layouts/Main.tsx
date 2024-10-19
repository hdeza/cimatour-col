import valley from "../assets/valley.svg";
import EastIcon from "@mui/icons-material/East";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function Main() {
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
        className="w-full space-y-4 px-4 md:px-10 lg:px-46 absolute flex flex-col text-center justify-center items-center text-white"
      >
        <motion.h2
          variants={textVariants}
          className="font-playfair text-4xl font-bold md:text-6xl lg:text-7xl"
        >
          Discover the climate and plan your activities
        </motion.h2>
        <motion.p
          variants={textVariants}
          className="font-roboto md:text-lg lg:text-2xl"
        >
          Get AI-powered weather forecast and personalized recommendations for
          your city
        </motion.p>
        <motion.div variants={textVariants} className="pt-8">
          <Link to="/forecast">
            <motion.button
              className="flex gap-2 items-center bg-white/30 rounded-full p-2 shadow-md"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "circOut" }}
            >
              <span className="font-roboto font-bold pl-2 md:text-xl">
                Let's start!
              </span>
              <div className="bg-white p-2 rounded-full">
                <EastIcon className="text-primary-orange" />
              </div>
            </motion.button>
          </Link>
        </motion.div>
      </motion.article>
    </section>
  );
}
