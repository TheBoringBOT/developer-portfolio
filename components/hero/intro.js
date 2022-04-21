import React from "react";
import { IoChevronForward } from "react-icons/io5";
import Avatar from "./avatar";
import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
      delay: 1,
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
      delay: 1,
    },
  },
};

export default function intro() {
  return (
    <>
      <section className="h-[75vh] min-h-[650px]  flex flex-col  items-center text-center lg:max-w-5xl   mx-auto">
        <div className="my-auto flex flex-col  items-center ">
          <Avatar />
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div variants={fadeInUp}>
              <h1 className=" tracking-tight text-3xl leading-tight md:text-[2.3rem]  font-bold text-grey block">
                Full Stack Developer.
              </h1>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <span className=" tracking-tight text-[3.3rem] leading-tight md:text-6xl lg:text-[5.3rem] font-bold  ">
                Gareth Richards
              </span>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <button className="tracking-tight text-highlight font-semibold text-3xl mt-4 hover:underline hover:text-highlight-hover">
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
