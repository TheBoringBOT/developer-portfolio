import { getFullYear } from "../../utils/date-formatter";
import { IoChevronForward, IoLogoGithub } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";

import { constants } from "../../libs/constants";

export default function footer({ setModalOpen }) {
  const { site_author, site_version, site_description } = constants;
  return (
    <footer className=" h-[95vh] md:h-[90vh] md:min-h-[600px] max-h-[850px] w-full p-0 m-0 mx-auto flex text-center justify-center bg-white dark:bg-black">
      <div className="flex flex-col items-center max-w-5xl px-5 mx-auto md:px-0">
        <div className="flex flex-col items-center justify-center mt-auto ">
          <h2 className="pt-10 text-5xl font-bold md:text-6xl gradient-title lg:text-8xl md:max-w-[70vw] ">
            Would you like to contact me?
          </h2>
          <button
            onClick={() => setModalOpen(true)}
            className="mt-8 text-2xl font-semibold transition-all duration-200 lg:text-3xl text-highlight hover:underline hover:highlight-hover dark:text-highlight-dark dark:hover:text-highlight-dark-hover"
          >
            <span className="flex items-end space-x-4 font-medium">
              {" "}
              Send a message <IoChevronForward />{" "}
            </span>
          </button>
        </div>
        <div className="flex flex-col justify-center py-10 mt-auto text-center text-dark-grey">
          <div className="flex items-center justify-center space-x-5 transition-all">
            <a
              className="hover:text-black dark:hover:text-light-grey"
              href="https://github.com/TheBoringBOT"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoGithub size={22} />
            </a>
            <a
              className="hover:text-black dark:hover:text-light-grey"
              href="mailto:hi@garethrichards.dev"
            >
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
