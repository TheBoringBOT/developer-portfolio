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
      <section className="flex flex-col items-center max-w-6xl px-5 mx-auto text-center pb-28 xl:pb-36 lg:max-w-5xl lg:px-10">
        <div className="flex flex-col items-center mt-32 ">
          <Avatar />
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div variants={fadeInUp}>
              <span className="block text-2xl font-semibold leading-loose tracking-wide text-grey dark:text-dark-grey">
                Gareth Richards
              </span>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h1 className=" dark:text-white text-black text-[12vw] sm:text-6xl leading-none    lg:text-[5.3rem]  font-bold pb-2 ">
                Web Developer <br />& Designer.
              </h1>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <button
                onClick={setModalOpen}
                className="mt-4 text-2xl font-semibold tracking-tight lg:text-3xl text-highlight hover:underline hover:text-highlight-hover dark:text-highlight-dark dark:hover:text-highlight-dark-hover"
              >
                <span className="flex items-end space-x-4 font-medium">
                  {" "}
                  Contact me <IoChevronForward className="mb-[1px]" />{" "}
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
