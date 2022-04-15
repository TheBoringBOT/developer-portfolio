import React from "react";
import ScrollIndicator from "./scroll-indicator";

export default function intro() {
  return (
    <>
      <div className="flex flex-col  items-center text-center lg:max-w-5xl mx-auto mt-28">
        <div>
          <h1 className="text-4xl lg:text-7xl font-bold  block">
            Full Stack Web Developer.
          </h1>
          <p className="mt-5 text-4xl px-20 leading-snug">
            Hey, I’m Gareth, I build websites, create marketing strategies, and
            configure email campaigns for 100k+ subs.
          </p>
        </div>
      </div>
    </>
  );
}
