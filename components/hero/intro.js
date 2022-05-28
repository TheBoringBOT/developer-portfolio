import React from "react";
import { IoChevronForward } from "react-icons/io5";
import Avatar from "./avatar";
import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
      delay: 0,
    },
  },
};

const fadeInUp = {
  initial: {
    y: 90,
    opacity: 0,
    transition: { duration: 1, ease: easing, delay: 1 },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing,
      delay: 0,
    },
  },
};

export default function intro({ setModalOpen }) {
  return (
    <>
      <section className="flex flex-col items-center pb-32 mx-auto text-center  lg:max-w-5xl">
        <div className="flex flex-col items-center mt-24 lg:mt-32 ">
          <Avatar />
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div variants={fadeInUp}>
              <h1 className=" tracking-tight text-xl leading-tight md:text-[2.3rem]  font-bold text-grey block">
                Gareth Richards
              </h1>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <span className=" tracking-tight text-2xl leading-tight md:text-6xl lg:text-[3.3rem] font-bold  ">
                Hi, I’m Ariel Beninca. I create well thought out, beautiful
                digital experiences & inject passion into every project.
              </span>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <button
                onClick={setModalOpen}
                className="mt-4 text-3xl font-semibold tracking-tight text-highlight hover:underline hover:text-highlight-hover"
              >
                <span className="flex items-center space-x-4">
                  {" "}
                  Contact Me <IoChevronForward />{" "}
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
