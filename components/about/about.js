import React from "react";
import { IoChevronForward } from "react-icons/io5";
import { motion } from "framer-motion";

export default function about() {
  return (
    <>
      <div className="space-y-20 my-44 text-4xl   lg:text-[5.3rem] leading-tight  font-bold">
        {aboutText.map((text, index) => {
          return (
            <div key={index}>
              <motion.p>{text}</motion.p>
            </div>
          );
        })}
        <button className="text-highlight  font-bold  mt-8 hover:underline hover:text-highlight-hover  transition-all duration-200">
          <span className="flex items-center space-x-4">
            {" "}
            View Resume <IoChevronForward />{" "}
          </span>
        </button>
      </div>
    </>
  );
}

//about text split into array for each paragraph
const aboutText = [
  "I’m a full stack developer with a diverse skill set.",
  "In areas such as design, code, marketing & business.",
  "I build with React, Laravel, Gatsby, Mysql and more... ",
  "I have worked with clients all over the 🌎 ",
  "I am 🇬🇧 but based in Sweden.",
  "Want to know more?",
  ,
];
