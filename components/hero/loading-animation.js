import React from "react";
import styles from "./avatar.module.css";

export default function loadingAnimation() {
  return (
    <aside className="max-w-7xl mx-auto px-10">
      <div className="h-[75vh] min-h-[650px]  flex flex-col  items-center text-center lg:max-w-5xl   mx-auto">
        <div className="mt-32 flex flex-col  items-center ">
          <div className="rounded-full flex items-center justify-center w-60 h-60 mb-12 relative">
            {/* <div
              className={`${styles.scaleDown} p-3 rounded-full w-full h-full bg-ghost-bg border border-ghost-border z-10`}
            ></div> */}

            <div className="  rounded-full  w-56 h-56  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div
                className={`${styles.pulse}  bg-pastel-gradient blur-lg rounded-full  w-56 h-56  `}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
