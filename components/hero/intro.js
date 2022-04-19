import React from "react";
import { IoChevronForward } from "react-icons/io5";
import Avatar from "./avatar";

export default function intro({ setModalOpen }) {
  return (
    <>
      <section className="h-[75vh] min-h-[650px]  flex flex-col  items-center text-center lg:max-w-5xl mx-auto">
        <div className="my-auto flex flex-col  items-center ">
          <Avatar />
          <div>
            <h1 className="text-[2.3rem] leading-4 font-bold text-grey block">
              Full Stack Developer.
            </h1>
          </div>
          <div>
            <span className="text-4xl lg:text-[5.3rem] font-bold   mt-5 mx-20 leading-snug">
              Gareth Richards
            </span>
          </div>
          <div>
            <button
              onClick={() => setModalOpen(true)}
              className="text-highlight font-semibold text-3xl mt-4 hover:underline hover:text-highlight-hover"
            >
              <span className="flex items-center space-x-4">
                {" "}
                Contact Me <IoChevronForward />{" "}
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
