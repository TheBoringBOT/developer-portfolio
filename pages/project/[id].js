
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
  } = projectsData[props.project];

  return (
    <>
      {/* custom seo for page */}
      <Head>
        <title>
          Project
          {" | "}
          {title}
        </title>
        <meta name="description" content={description_short} />
      </Head>

      <motion.div exit={{ opacity: 0 }}>
        <motion.div initial="initial" animate="animate">
          <div className="grid min-h-screen grid-cols-6 md:grid-cols-12 bg-light-grey">
            {/* Project mockup */}
            <div className="col-span-6 box lg:h-full">
              <div className="flex items-center justify-center h-full">
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
                    <div className="w-full h-full ">
                      <ExportedImage
                        objectFit="contain"
                        layout="fill"
                        src={image}
                        className="absolute top-0 left-0 w-full h-full "
                      />
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* project details */}
            <div className="col-span-6 bg-white lg:h-full">
              <div className="flex flex-col items-center h-full px-10 py-16 lg:justify-start md:py-40 lg:px-20 2xl:px-40">
                <motion.div variants={stagger} className="space-y-10">
                  <Link href="/" passHref>
                    <motion.div variants={fadeInUp}>
                      <button className="transition-all duration-200 text-highlight hover:text-highlight-hover hover:underline">
                        <span className="flex items-center space-x-4 ">
                          <IoChevronBack /> Back to home
                        </span>
                      </button>
                    </motion.div>
                  </Link>
                  <motion.div variants={fadeInUp}>
                    {/* <span>Project</span> */}
                    {logo}
                  </motion.div>
                  <motion.h1
                    className="text-4xl font-bold leading-tight lg:text-6xl"
                    variants={fadeInUp}
                  >
                    {title}
                  </motion.h1>
                  <motion.p variants={fadeInUp} className="text-xl font-normal">
                    {description}
                  </motion.p>
                  <motion.div variants={fadeInUp} className="space-y-5">
                    <span className="font-semibold ">Tech Stack:</span>
                    <div className="flex flex-wrap items-center gap-y-5 gap-x-5 ">
                      {techStack(stack)}
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="mt-20 ">
                    <div className="flex items-center space-x-10">
                      <a
                        href={url}
                        className="px-5 py-2 font-semibold text-white transition-all duration-200 rounded bg-highlight hover:bg-highlight-hover"
                      >
                        View Live
                      </a>
                      <a
                        href={code}
                        className="font-normal text-black transition-all hover:text-black hover:underline"
                      >
                        <span className="flex items-center space-x-4">
                          {" "}
                          View Code <IoChevronForward />{" "}
                        </span>
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
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
        className="px-5 py-2 text-sm rounded bg-light-grey text-dark-grey"
      >
        {item}
      </span>
    );
  });
};

export default Product;
