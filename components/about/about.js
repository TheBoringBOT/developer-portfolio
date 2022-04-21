import { useRef } from "react";
import useScrollPosition from "../../hooks/useScrollPosition";
import { IoChevronForward } from "react-icons/io5";
import styles from "./about.module.css";

const changeBlockOpacity = (sectionProgress, blockNo) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.05;
};

const About = () => {
  const scrollYPosition = useScrollPosition();

  const refContainer = useRef(null);

  // the amount of text blocks there are. Now just taking from array length
  const numOfBlocks = aboutText.length;
  let progress = 0;
  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollYPosition - offsetTop) + halfH
      ) / clientHeight;
    progress = Math.min(
      numOfBlocks - 0.5,
      Math.max(0.5, percentY * numOfBlocks)
    );
  }

  return (
    <div className="min-w-screen bg-light-grey text-black">
      <div className="min-h-screen max-w-5xl  mx-auto px-10  lg:px-20 py-10 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl font-bold  ">
        <div ref={refContainer} className="leading-[1.1]  tracking-tight">
          {aboutText.map((text, i) => (
            <span
              key={i}
              style={{ opacity: changeBlockOpacity(progress, i) }}
              className={`${styles.text} inline-block after:content-['_'] my-3`}
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default About;

const aboutText = [
  "I’m a developer with a diverse skill set, in areas such as design, coding, marketing & business.",
  "I work usually with React, Laravel, MySQL, Vue, tailwind & more...",
  "A 🇬🇧 based in Sweden with clients all over the 🌎 ",

  <>
    <p> Want to see more details?</p>
    <button className="text-highlight  font-bold  mt-3 hover:underline hover:text-highlight-hover  transition-all duration-200">
      <span className="flex items-center space-x-4">
        {" "}
        View Resume <IoChevronForward />{" "}
      </span>
    </button>
  </>,
];
