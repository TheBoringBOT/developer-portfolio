import React from "react";
//framer motion imports for parallax
import {
  motion,
  useViewportScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";

export default function projects({ runAnimation }) {
  let yValue1, yValue2;

  if (runAnimation) {
    const { scrollYProgress } = useViewportScroll();
    yValue1 = useTransform(scrollYProgress, [0, 1], ["-5%", "10%"]);
    yValue2 = useTransform(scrollYProgress, [0, 1], ["5%", "-50%"]);
  }

  //TODO create a function to create two columns of cards with one array and not two seperate ones
  return (
    <div className="grid md:grid-cols-2 gap-10 mt-10">
      {/* column 1 */}
      <motion.div style={{ y: yValue1 }} className="flex flex-col space-y-8">
        {projectsLeft.map((project, index) => {
          return projectCard({ project, index });
        })}
      </motion.div>

      {/* column 2 */}
      <motion.div style={{ y: yValue2 }} className="flex flex-col space-y-8">
        {projectsRight.map((project, index) => {
          return projectCard({ project, index });
        })}
      </motion.div>
    </div>
  );
}

const projectCard = ({ project, index }) => {
  return (
    <a
      href={project.url}
      key={index}
      className="transition-transform duration-200 cursor-pointer rounded-3xl
      w-full h-full overflow-hidden bg-light-grey "
    >
      <div className="w-full h-full hover:scale-[103%] transition-transform ">
        <img
          className="overflow-hidden rounded-3xl  w-full h-full"
          src={project.image}
        />
      </div>
    </a>
  );
};

// placeholder project cards

const projectsLeft = [
  {
    image:
      "https://placehold.jp/30/dd6699/ffffff/600x600.png?text=placeholder+image+1",
    title: "Project 1",
    url: "https://www.google.com",
  },
  {
    image:
      "https://placehold.jp/30/ffcc00/ffffff/600x600.png?text=placeholder+image+2",
    title: "Project 2",
    url: "https://www.google.com",
  },
];
const projectsRight = [
  {
    image:
      "https://placehold.jp/30/9873ff/ffffff/600x600.png?text=placeholder+image+3",
    title: "Project 3",
    url: "https://www.google.com",
  },
  {
    image:
      "https://placehold.jp/30/ff763c/ffffff/600x600.png?text=placeholder+image+4",
    title: "Project 4",
    url: "https://www.google.com",
  },
];
