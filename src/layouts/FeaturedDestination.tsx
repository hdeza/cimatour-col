import { Carousel } from "flowbite-react";
import cartagena from "../assets/cartagena1.jpg";
import tayrona from "../assets/parquetayrona.jpg";
import salento from "../assets/salento1.jpg";
import sanandres from "../assets/sanandres1.jpg";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
export default function FeaturedDestination() {
  const ref = useRef(null);
  const refDestinations = useRef(null);
  const isInView = useInView(ref, { once: false });
  const isInViewDestination = useInView(refDestinations, { once: false });
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section className="bg-secunday-white py-8 space-y-8 ">
      <article className="flex  w-full font-roboto">
        <hr className=" border-gray-600 w-16 my-auto mr-2 lg:w-24" />
        <p className="text-sm text-gray-600 my-auto lg:text-lg">
          FEATURED DESTINATION
        </p>
      </article>
      <motion.article
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col px-12 py-6 space-y-10"
      >
        <motion.article
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 4,
            ease: [0.68, -0.55, 0.27, 1.55], // Easing personalizado (cubic-bezier),
            type: "spring",
            stiffness: 100, // Establece la rigidez para un movimiento más elástico
            damping: 15, // Damping menor para menos amortiguación
          }}
          className="lg:px-20 lg:pb-10"
        >
          <h4 className="font-playfair text-xl text-center font-semibold lg:text-6xl">
            Explore the beauty and diversity of Colombia’s top destinations,{" "}
            <span className="text-primary-orange">
              where climate and adventure go hand in hand.
            </span>
          </h4>
        </motion.article>

        <motion.section
          ref={refDestinations}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row  md:space-y-0 md:justify-between md:space-x-8 md:items-center lg:pl-40 lg:space-x-40 "
        >
          <motion.section
            initial={{ opacity: 0, y: -30 }}
            animate={isInViewDestination ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 2,
              ease: [0.68, -0.55, 0.27, 1.55], // Easing personalizado (cubic-bezier),
              type: "spring",
              stiffness: 100, // Establece la rigidez para un movimiento más elástico
              damping: 15, // Damping menor para menos amortiguación
            }}
            className="font-roboto space-y-4 md:w-1/2 lg:text-xl"
          >
            <article className="flex space-x-10 items-center justify-between p-3">
              <p className="w-3/5 lg:w-4/5">Cartagena de Indias, Bolivar</p>
              <div className="rounded-2xl border border-gray-700 py-1 bg-white w-2/5 text-center lg:w-1/5">
                <p className="">Colonial</p>
              </div>
            </article>
            <article className="flex space-x-6 items-center justify-between p-3 ">
              <p className="w-3/5 lg:w-4/5">Tayrona National Park, Magdalena</p>
              <div className="rounded-2xl border border-gray-700 py-1 bg-white w-2/5 text-center lg:w-1/5">
                <p>Nature</p>
              </div>
            </article>
            <article className="flex space-x-6 items-center justify-between p-3">
              <p className="w-3/5 lg:w-4/5">Salento, Quindio</p>
              <div className="rounded-2xl border border-gray-700 py-1 px-2 bg-white w-2/5 text-center lg:w-1/5">
                <p>Coffe</p>
              </div>
            </article>
            <article className="flex space-x-6 items-center justify-between p-3 ">
              <p className="w-3/5 lg:w-4/5">
                San Andrés Island and Providencia
              </p>
              <div className="rounded-2xl border border-gray-700 py-1 px-2 bg-white  w-2/5 text-center lg:w-1/5">
                <p>Beach</p>
              </div>
            </article>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, y: -30 }}
            animate={isInViewDestination ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 2,
              ease: [0.68, -0.55, 0.27, 1.55], // Easing personalizado (cubic-bezier),
              type: "spring",
              stiffness: 100, // Establece la rigidez para un movimiento más elástico
              damping: 15, // Damping menor para menos amortiguación
            }}
            className="h-72 rounded-2xl md:w-1/2 lg:pr-40 lg:h-80 overflow-hidden"
          >
            <Carousel pauseOnHover>
              <img src={cartagena} alt="cartagena de indias, colombia" />
              <img src={tayrona} alt="tayrona park" />
              <img src={salento} alt="salento" />
              <img src={sanandres} alt="san andres islas, colombia" />
            </Carousel>
          </motion.section>
        </motion.section>
      </motion.article>
    </section>
  );
}
