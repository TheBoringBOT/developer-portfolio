import { motion } from "framer-motion";
import Head from "next/head";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import Link from "next/link";
import ErrorPage from "next/error";
import ExportedImage from "next-image-export-optimizer";

import { projectsData } from "../../data/projects";

const getProject = (id) => {
  return projectsData[id];
};

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
  // return 404 if no project matching id
  if (!props.project) {
    return <ErrorPage statusCode={404} />;
  }
  const {
    title,
    image,
    description,
    description_short,
    stack,
    url,
    code,
    logo,
    features,
    comingSoon,
  } = projectsData[props.project];

  return (
    <section>
      {/* custom seo for page */}
      <Head>
        <title>
          Project
          {" | "}
          {title}
        </title>
        <meta name="description" content={description_short} />
      </Head>

      <motion.div
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
        className="grid min-h-screen grid-cols-6 md:grid-cols-12 "
      >
        {/* Project mockup */}
        <div className="col-span-6 box bg-light-grey dark:text-light-grey dark:bg-black-secondary">
          <div className="flex items-center justify-center md:h-full ">
            <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
              <motion.div
                className="h-auto w-[450px] max-w-[45vw] p-20 relative pt-[100%] "
                key={image}
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 200, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                  x: { type: "spring", stiffness: 100 },
                }}
              >
                {" "}
                <figure className="w-full h-full ">
                  <ExportedImage
                    objectFit="contain"
                    layout="fill"
                    src={image}
                    className="absolute top-0 left-0 w-full h-full "
                  />
                </figure>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* project details */}
        <div className="col-span-6 overflow-y-scroll bg-white dark:bg-black dark:text-white md:h-screen">
          <article className="flex flex-col items-center justify-center ">
            <div className="flex h-full px-10 no-scrollbar">
              <motion.div
                variants={stagger}
                className="px-10 py-16 space-y-10 lg:py-20 xl:px-20 2xl:px-40"
              >
                <Link href="/" passHref>
                  <motion.div variants={fadeInUp}>
                    <button className="transition-all duration-200 text-highlight hover:text-highlight-hover dark:text-highlight-dark dark:hover:text-highlight-dark-hover hover:underline">
                      <span className="flex items-center space-x-4 ">
                        <IoChevronBack /> Back to home
                      </span>
                    </button>
                  </motion.div>
                </Link>
                <motion.div variants={fadeInUp}>
                  <figure>{logo}</figure>
                </motion.div>
                <motion.h1
                  className="text-4xl font-bold leading-tight xl:text-6xl"
                  variants={fadeInUp}
                >
                  {title}
                </motion.h1>
                <motion.p variants={fadeInUp} className="text-xl font-normal">
                  {description}
                </motion.p>

                <motion.div variants={fadeInUp} className="space-y-5">
                  <span className="font-semibold ">Key Features:</span>
                  <div className="flex flex-col items-start-y-2 gap-x-5 ">
                    <ul className="list-style-none">
                      {featuresList(features)}
                    </ul>
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp} className="space-y-5">
                  <span className="font-semibold ">Tech Stack:</span>
                  <div className="flex flex-wrap items-center gap-y-5 gap-x-5 ">
                    {techStack(stack)}
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="mt-20 ">
                  <div className="flex items-center space-x-10">
                    {!comingSoon ? (
                      <>
                        <a
                          href={url}
                          target="_blank"
                          className="px-5 py-2 font-semibold text-white transition-all duration-200 rounded whitespace-nowrap bg-highlight hover:bg-highlight-hover dark:bg-highlight-dark dark:hover:bg-highlight-dark-hover"
                        >
                          View Live
                        </a>
                        <a
                          target="_blank"
                          href={code}
                          className="font-normal text-black transition-all whitespace-nowrap dark:text-white dark:hover:text-light-grey hover:text-black hover:underline"
                        >
                          <span className="flex items-center space-x-4">
                            {" "}
                            View Code <IoChevronForward />{" "}
                          </span>
                        </a>
                      </>
                    ) : (
                      <span className="px-5 py-2 font-semibold text-blue-500 transition-all duration-200 border border-blue-500 rounded pointer-events-none animate-pulse">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </article>
        </div>
      </motion.div>
    </section>
  );
};

//id in url
Product.getInitialProps = ({ query: { id } }) => {
  const project = id;

  console.table(project);
  return {
    props: {
      project,
    },
  };
};

// map tech stack
const techStack = (stack) => {
  return stack.map((item, index) => {
    return (
      <span
        key={index}
        className="px-5 py-2 text-sm rounded bg-light-grey text-dark-grey dark:bg-ghost-bg/20 dark:text-light-grey"
      >
        {item}
      </span>
    );
  });
};

// map features list
const featuresList = (features) => {
  return features.map((item, index) => {
    return (
      <li key={index} className="relative">
        <span className="absolute left-0 ">{index + 1}.</span>
        <span className="ml-5 ">{item}</span>
      </li>
    );
  });
};

export default Product;
