import React from "react";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";

//framer motion imports for parallax
import {
  motion,
  useViewportScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";

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
    },
  },
};

export default function projects({ runAnimation }) {
  let yValue1, yValue2;

  if (runAnimation) {
    const { scrollYProgress } = useViewportScroll();
    yValue1 = useTransform(scrollYProgress, [0, 1], ["-5%", "10%"]);
    yValue2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  }

  //TODO create a function to create two columns of cards with one array and not two seperate ones
  return (
    <div className="grid md:grid-cols-2 gap-10 mt-10 ">
      {/* column 1 */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate">
        <motion.div style={{ y: yValue1 }} className="flex flex-col space-y-8">
          {projectsLeft.map((project, index) => {
            return projectCard({ project, index });
          })}
        </motion.div>
      </motion.div>

      {/* column 2 */}
      <motion.div variants={fadeInUp} initial="initial" animate="animate">
        <motion.div
          style={{ y: yValue2 }}
          variants={fadeInUp}
          className="flex flex-col space-y-8"
        >
          {projectsRight.map((project, index) => {
            return projectCard({ project, index });
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

const projectCard = ({ project, index }) => {
  return (
    <Link href={project.url} key={index}>
      <div
        className="transition-transform duration-200 cursor-pointer rounded-3xl
      w-full h-full min-w-full min-h-full overflow-hidden bg-light-grey flex flex-1 pt-[100%] relative "
      >
        <div className="w-full h-full hover:scale-[103%] transition-transform absolute top-0 left-0  ">
          <ExportedImage
            objectFit="contain"
            layout="fill"
            alt={project.title}
            className="overflow-hidden rounded-3xl  w-full h-full "
            src={project.image}
          />
        </div>
      </div>
    </Link>
  );
};

// placeholder project cards

const projectsLeft = [
  {
    image:
      "https://placehold.jp/30/dd6699/ffffff/600x600.png?text=placeholder+image+1",
    title: "Project 1",
    url: "/project/1",
  },
  {
    image:
      "https://placehold.jp/30/ffcc00/ffffff/600x600.png?text=placeholder+image+2",
    title: "Project 2",
    url: "/project/2",
  },
];
const projectsRight = [
  {
    image:
      "https://placehold.jp/30/9873ff/ffffff/600x600.png?text=placeholder+image+3",
    title: "Project 3",
    url: "/project/3",
  },
  {
    image:
      "https://placehold.jp/30/ff763c/ffffff/600x600.png?text=placeholder+image+4",
    title: "Project 4",
    url: "/project/4",
  },
];
