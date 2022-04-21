import { useRef } from "react";
import useScrollPosition from "../../hooks/useScrollPosition";
import { IoChevronForward } from "react-icons/io5";
import styles from "./about.module.css";

const changeBlockOpacity = (sectionProgress, blockNo) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
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
    <div>
      <div className="min-h-screen my-20   ">
        <div
          ref={refContainer}
          className="leading-[1.15] transition-opacity  duration-500 text-6xl font-semibold"
        >
          {aboutText.map((text, i) => (
            <span
              key={i}
              style={{ opacity: changeBlockOpacity(progress, i) }}
              className={`${styles.text} inline-block after:content-['_']`}
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
  "I’m a developer with a diverse skill set.",
  "I n areas such as design, coding, marketing & business.",
  "I build with React, Laravel, Gatsby, Mysql and more... ",
  "I have worked with clients all over the 🌎 ",
  "I am 🇬🇧 but based in Sweden.",
  "Want to know more?",
  <>
    <button className="text-highlight  font-bold  mt-8 hover:underline hover:text-highlight-hover  transition-all duration-200">
      <span className="flex items-center space-x-4">
        {" "}
        View Resume <IoChevronForward />{" "}
      </span>
    </button>
  </>,
];
