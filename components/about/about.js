import { useRef, useState, useEffect } from "react";
import { IoChevronForward } from "react-icons/io5";

import { motion, useViewportScroll } from "framer-motion";

export default function about() {
  return (
    <>
      <div className="h-full space-y-20 my-44 text-4xl   lg:text-[5.3rem] leading-tight  font-bold">
        <p>I’m a full stack developer with a diverse skill set. </p>

        <p>In areas such as design, code, marketing & business.</p>
        <p>I build with React, Laravel, Gatsby, Mysql and more...</p>
        <p>I have worked with clients all over the 🌎 </p>
        <p>I am 🇬🇧 but based in Sweden. </p>
        <p>Want to know more? </p>
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
