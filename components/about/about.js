import { useRef } from "react";
import useScrollPosition from "../../hooks/useScrollPosition";
import { IoChevronForward } from "react-icons/io5";

const changeBlockOpacity = (sectionProgress, blockNo) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.08;
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
      Math.max(0.5, percentY * numOfBlocks + -0.3)
    );
  }

  return (
    <div
      ref={refContainer}
      className="text-black min-w-screen bg-light-grey dark:bg-black-secondary dark:text-light-grey"
    >
      <div className="flex flex-col items-center justify-center max-w-5xl min-h-screen px-10 py-10 mx-auto text-4xl font-bold lg:px-20 md:py-28 lg:py-36 md:text-6xl lg:text-[80px] ">
        <div className="leading-[1.1]  tracking-tighter">
          {aboutText.map((text, i) => (
            <>
              <div
                key={i}
                style={{ opacity: changeBlockOpacity(progress, i) }}
                className="inline-block after:content-['_'] my-3 transition-opacity duration-500"
              >
                {text}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
export default About;

const aboutText = [
  <p className="text-black dark:grad-text">
    I’m a full-stack web developer with a diverse skill-set that enables me to
    work on a wide range of projects.
  </p>,
  <p className="text-black dark:grad-text">
    I am proficient in JavaScript, React, Redux, Node.js, MySQL, Vue, Laravel
    and more.
  </p>,
  <p className="text-black dark:grad-text">
    I also have experience within marketing, SEO, project management, and UI/UX
    design.
  </p>,
  // "In my personal life I 💛 to read non-fiction 📕 go 🏂 and 🏃‍♂️💨 in the forest 🌳.",
  <p className="text-black dark:grad-text">
    Some personal interests include reading non-fiction, meditation, running and
    acting.
  </p>,

  <>
    <p className="text-black dark:grad-text">
      Would you like to see a little more detail?
    </p>
    <a
      href="/Gareth_Richards_Resume.pdf"
      target="_blank"
      className="mt-3 font-bold transition-all duration-200 text-highlight hover:underline hover:text-highlight-hover dark:text-highlight-dark dark:hover:text-highlight-dark-hover"
    >
      <span className="flex items-center space-x-4 ">
        {" "}
        View Resume <IoChevronForward />{" "}
      </span>
    </a>
  </>,
];
