import { motion } from "framer-motion";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import Link from "next/link";

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
    y: 60,
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

// const currentProject = projectsData[id];

const Product = ({ props }) => {
  const { title, image, description, url, code } = props.project;
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <div className="grid grid-cols-6 md:grid-cols-12 min-h-screen bg-light-grey">
        {/* Project mockup */}
        <div className="box col-span-6 lg:h-full">
          <div className="flex justify-center items-center h-full">
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
              <motion.img
                className="h-full min-h-[300px] max-h-[45vh] p-10"
                key={image}
                src={image}
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 200, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
              />
            </motion.div>
          </div>
        </div>

        {/* project details */}
        <div className="box col-span-6 bg-white lg:h-full">
          <div className="flex flex-col items-center lg:justify-start  px-10 py-16 md:py-40 lg:px-20  2xl:px-40 h-full">
            <motion.div variants={stagger} className="space-y-10">
              <Link href="/">
                <motion.div variants={fadeInUp}>
                  <button className="text-blue hover:text-blue-hover  transition-all duration-200 hover:underline">
                    <span className="flex items-center space-x-4 ">
                      <IoChevronBack /> Back to home
                    </span>
                  </button>
                </motion.div>
              </Link>
              <motion.div variants={fadeInUp}>
                <span>Project</span>
              </motion.div>
              <motion.h1
                className="text-4xl lg:text-6xl leading-tight font-bold"
                variants={fadeInUp}
              >
                {title}
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-2xl font-normal">
                {description}
              </motion.p>
              <motion.div variants={fadeInUp}></motion.div>

              <motion.div
                variants={fadeInUp}
                className="space-x-10 flex items-center"
              >
                <a
                  href={url}
                  className="bg-blue hover:bg-blue-hover transition-all duration-200 rounded px-5 py-2 text-white font-semibold"
                >
                  View Live
                </a>
                <a
                  href={code}
                  className=" transition-all  text-dark-grey hover:text-black font-semibold  hover:underline"
                >
                  <span className="flex items-center space-x-4">
                    {" "}
                    View Code <IoChevronForward />{" "}
                  </span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

Product.getInitialProps = ({ query: { id } }) => {
  const project = projectsData[id];
  return {
    props: {
      project,
    },
  };
};

const projectsData = {
  1: {
    title: "Project 1",
    image:
      "https://placehold.jp/30/dd6699/ffffff/600x600.png?text=placeholder+image+1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    url: "https://www.google.com",
    code: "https://www.google.com",
  },
  2: {
    title: "Project 2",
    image:
      "https://placehold.jp/30/ffcc00/ffffff/600x600.png?text=placeholder+image+2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    url: "https://www.google.com",
    code: "https://www.google.com",
  },
  3: {
    title: "Project 3",
    image:
      "https://placehold.jp/30/9873ff/ffffff/600x600.png?text=placeholder+image+3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    url: "https://www.google.com",
    code: "https://www.google.com",
  },
  4: {
    title: "Project 4",
    image:
      "https://placehold.jp/30/ff763c/ffffff/600x600.png?text=placeholder+image+4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    url: "https://www.google.com",
    code: "https://www.google.com",
  },
};

export default Product;
