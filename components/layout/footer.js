import { getFullYear } from "../../utils/date-formatter";
import { IoChevronForward, IoLogoGithub } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";

import { constants } from "../../libs/constants";

export default function footer({ setModalOpen }) {
  const { site_author, site_version, site_description } = constants;
  return (
    <footer className="h-[90vh] min-h-[600px] max-h-[850px] w-full p-0 m-0 mx-auto flex text-center justify-center bg-white">
      <div className="max-w-5xl mx-auto items-center flex flex-col px-10 md:px-0">
        <div className="flex flex-col justify-center items-center mt-auto ">
          <h4 className="pt-10 gradient-title text-6xl md:text-8xl font-bold  ">
            Would you like to contact me?
          </h4>
          <button
            onClick={() => setModalOpen(true)}
            className="text-highlight transition-all duration-200 font-medium text-2xl mt-8 hover:underline hover:highlight-hover"
          >
            <span className="flex items-center space-x-4">
              {" "}
              Send me a message <IoChevronForward />{" "}
            </span>
          </button>
        </div>
        <div className="flex flex-col text-center justify-center  mt-auto py-10 text-dark-grey">
          <div className="flex space-x-5 justify-center items-center transition-all">
            <a
              className="hover:text-black"
              href="https://github.com/TheBoringBOT"
              target="_blank"
            >
              <IoLogoGithub size={22} />
            </a>
            <a className="hover:text-black" href="mailto:hi@garethrichards.dev">
              <MdAlternateEmail size={22} />
            </a>
          </div>
          <div className="flex flex-col pt-5">
            <span>{getFullYear()} All rights reserved.</span>
            <span>Version: {site_version}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
