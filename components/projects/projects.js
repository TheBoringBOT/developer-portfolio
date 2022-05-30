import { useEffect, useState } from "react";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
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
      <div className="grid pb-20 mt-10 space-y-8 md:grid-cols-2 md:gap-10 md-space-y-0 md:pb-24 lg:pb-30 ">
        {/* column 1 */}
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <motion.div
            style={{ y: runAnimation ? yValue1 : 0 }}
            className="flex flex-col space-y-8"
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
            className="flex flex-col space-y-8"
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
    <article>
      <Link href={project.url} key={index} passHref>
        <a>
          <span className="sr-only">View {project.title} project</span>

          <div
            className="transition-transform duration-200 cursor-pointer rounded md:rounded-xl lg:rounded-2xl
      w-full h-full min-w-full min-h-full overflow-hidden bg-light-grey dark:bg-white/5 transition-bg duration-300 flex flex-1 pt-[100%] relative "
          >
            <div className="w-full h-full hover:scale-[103%] transition-transform absolute top-0 left-0  ">
              {/* <ExportedImage
              objectFit="contain"
              layout="fill"
              alt={project.title}
              className="w-full h-full overflow-hidden rounded md:rounded-xl lg:rounded-2xl "
              src={project.image}
            /> */}
            </div>
          </div>
        </a>
      </Link>
    </article>
  );
};

// placeholder project cards

const projectsLeft = [
  {
    image:
      "https://placehold.jp/30/dd6699/ffffff/600x600.png?text=placeholder+image+1",
    title: "E-commerce store",
    url: "/project/1",
  },
  {
    image:
      "https://placehold.jp/30/ffcc00/ffffff/600x600.png?text=placeholder+image+2",
    title: "Email Spam Checker",
    url: "/project/2",
  },
];
const projectsRight = [
  {
    image:
      "https://placehold.jp/30/9873ff/ffffff/600x600.png?text=placeholder+image+3",
    title: "Sound sharing website",
    url: "/project/3",
  },
  {
    image:
      "https://placehold.jp/30/ff763c/ffffff/600x600.png?text=placeholder+image+4",
    title: "Agency website & blog",
    url: "/project/4",
  },
];
