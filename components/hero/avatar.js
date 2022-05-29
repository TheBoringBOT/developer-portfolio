import React from "react";
import styles from "./avatar.module.css";
import ExportedImage from "next-image-export-optimizer";

export default function Avatar() {
  return (
    <>
      <div className="relative flex items-center justify-center w-64 h-64 mb-12 rounded-full">
        <>
          <div className="z-10 w-full h-full p-3 border rounded-full bg-ghost-bg border-ghost-border">
            {/* Add video easter egg on hover ? */}
            {/* <video
              src="/test2.mp4"
              className="object-cover w-full h-full rounded-full "
              autoPlay
              loop
              muted
            /> */}
            <ExportedImage
              layout="fill"
              objectFit="contain"
              className="w-full h-full p-3 rounded-full "
              src="https://i.pravatar.cc/300"
              alt="Gareth Richards"
            />
          </div>

          <div className={styles.pulsing}>
            <div
              className={`${styles.fadein} z-1 bg-pastel-gradient blur-lg rounded-full  w-64 h-64  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
            ></div>
          </div>
        </>

        <div className="absolute w-56 h-56 transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2">
          <div
            className={`${styles.pulse}  bg-pastel-gradient blur-lg rounded-full  w-56 h-56  `}
          ></div>
        </div>
      </div>
    </>
  );
}
