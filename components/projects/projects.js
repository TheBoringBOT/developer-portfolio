import { useEffect, useState } from "react";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import { IoChevronForward } from "react-icons/io5";
import useWindowSize from "../../hooks/useWindowSize";

//framer motion imports for parallax
import {
  motion,
  useViewportScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";

export default function Projects() {
  const isNotMobile = useWindowSize().width > 767;
  const [runAnimation, setRunAnimation] = useState(false);

  useEffect(() => {
    setRunAnimation(isNotMobile);
  }, [isNotMobile]);

  let yValue1, yValue2;

  const { scrollYProgress } = useViewportScroll();
  yValue1 = useTransform(scrollYProgress, [0, 1], ["-5%", "10%"]);
  yValue2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  let easing = [0.6, -0.05, 0.01, 0.99];

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const fadeInUp = {
    initial: {
      y: 90,
      opacity: 0,
      transition: { duration: 1, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: easing,
        delay: 0.3,
      },
    },
  };

  //TODO create a function to create two columns of cards with one array and not two seperate ones
  return (
    <section className="max-w-6xl px-5 mx-auto lg:px-10">
      <div className="grid pb-20 mt-10 space-y-8 md:grid-cols-2 md:gap-5 md-space-y-0 md:pb-24 lg:pb-30 ">
        {/* column 1 */}
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <motion.div
            style={{ y: runAnimation ? yValue1 : 0 }}
            className="flex flex-col space-y-5"
          >
            {projectsLeft.map((project, index) => {
              return projectCard({ project, index });
            })}
          </motion.div>
        </motion.div>

        {/* column 2 */}
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <motion.div
            style={{ y: runAnimation ? yValue2 : 0 }}
            className="flex flex-col space-y-5"
          >
            {projectsRight.map((project, index) => {
              return projectCard({ project, index });
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const projectCard = ({ project, index }) => {
  return (
    <article key={index}>
      <span className="sr-only">View {project.title} project</span>

      <div
        className="card transition-transform duration-200  rounded md:rounded-xl lg:rounded-2xl
      w-full h-full min-w-full  overflow-hidden bg-light-grey dark:bg-[#1c1c1f] transition-bg duration-300 flex flex-1  pt-[130%] min-h-[630px]  relative "
      >
        {/* card text */}
        <div className="absolute top-0 left-0 z-10 w-full h-full">
          <div className="flex items-start justify-center w-full h-full pt-20">
            <div className="flex flex-col items-center justify-center px-5 space-y-3 lg:px-8 ">
              <h3 className="text-5xl font-semibold text-center text-black dark:text-white">
                {project.title}
              </h3>
              <p className="px-5 font-normal text-center text-md lg:text-xl text-black-2 dark:text-light-grey lg:px-10">
                {project.description}
              </p>
              <div className="flex items-center space-x-5 duration-300 text-md lg:text-lg transiton-all">
                {!project.comingSoon && (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-3 transition-all duration-300 text-highlight hover:text-highlight-hover dark:text-highlight-dark dark:hover:text-highlight-dark-hover hover:underline"
                    href={project.live}
                  >
                    View Live <IoChevronForward />
                  </a>
                )}
                <Link href={project.url} key={index} passHref>
                  <a className="flex items-center space-x-3 transition-all duration-300 text-highlight hover:text-highlight-hover dark:text-highlight-dark dark:hover:text-highlight-dark-hover hover:underline">
                    Info <IoChevronForward />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-full ">
          <div className="relative flex justify-center h-full">
            <div className="relative flex items-end w-full mt-auto -mb-16 transition-all duration-300 will-change card-image h-[63%]">
              <ExportedImage
                objectFit="contain"
                quality={100}
                layout="fill"
                alt={project.title}
                className="bottom-0 w-full h-full"
                src={project.image}
                loading="eager"
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

// placeholder project cards

const projectsLeft = [
  {
    image: "/images/card/sirene.png",
    title: "E-commerce",
    description:
      "A minimal e-commerce store with checkout, filtering and more.",
    live: "https://sirene.garethrichards.dev",
    comingSoon: false,
    url: "/project/1",
  },
  {
    image: "/images/card/spam.png",
    title: "Spam Checker",
    description: "Check email content for spam word triggers and read time",
    comingSoon: false,
    live: "https://spamchecker.garethrichards.dev",
    url: "/project/2",
  },
];
const projectsRight = [
  {
    image: "/images/card/soundx.png",
    title: "Audio platform",
    description:
      "Sound sharing platform for creators to freely share their sounds",
    comingSoon: false,
    live: "https://soundx.garethrichards.dev",
    url: "/project/3",
  },
  {
    image: "/images/card/moo.png",
    title: "Agency website",
    description: "Website with advanced scroll animations and a markdown blog",

    comingSoon: true,
    live: "",
    url: "/project/4",
  },
];
