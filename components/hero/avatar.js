import React from "react";
import styles from "./avatar.module.css";

export default function Avatar() {
  return (
    <>
      <div className="rounded-full flex items-center justify-center w-60 h-60 mb-12 relative">
        <div className="p-3 rounded-full w-full-h-full bg-ghost-bg border border-ghost-border z-10">
          <img
            className=" rounded-full w-full h-full"
            src="https://i.pravatar.cc/300"
            alt="Gareth Richards"
          />
        </div>
        {/* 2 gradients for animations/background */}
        <div className={styles.pulsing}>
          <div
            className={`${styles.fadein} z-1 bg-pastel-gradient blur-lg rounded-full  w-56 h-56  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
          ></div>
        </div>

        <div className="  rounded-full  w-56 h-56  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div
            className={`${styles.pulse}  bg-pastel-gradient blur-lg rounded-full  w-56 h-56  `}
          ></div>
        </div>
      </div>
    </>
  );
}
