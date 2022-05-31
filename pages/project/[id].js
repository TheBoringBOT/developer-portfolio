import { motion } from "framer-motion";
import Head from "next/head";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import Link from "next/link";
import ErrorPage from "next/error";
import ExportedImage from "next-image-export-optimizer";
// Fetching data from the JSON file
import fsPromises from "fs/promises";
import path from "path";

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

const Product = (project) => {
  console.table(project);
  // return 404 if no project matching id
  // if (!props) {
  //   return <ErrorPage statusCode={404} />;
  // }
  const {
    title,
    image,
    description,
    description_short,
    stack,
    url,
    code,
    logo,
    video,
    videoPoster,
    features,
    comingSoon,
  } = project;

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
        <div className="col-span-6 box bg-light-grey dark:text-light-grey dark:bg-black">
          <div className="relative flex items-center justify-center ml-auto md:h-full max-w-7xl ">
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              className="flex h-auto basis-3/5"
            >
              <motion.div
                className="relative w-full "
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
                <figure className="relative w-full h-full pt-[100%] pointer-events-none">
                  <ExportedImage
                    objectFit="contain"
                    layout="fill"
                    priority={true}
                    src="/images/project/mockup.png"
                    className="z-10 w-full h-full "
                  />
                  <video
                    loop
                    autoPlay
                    muted
                    className="absolute top-[5%] left-[1%] w-[98%] h-[73%] "
                    src={video}
                    poster={videoPoster}
                  ></video>
                </figure>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* project details */}
        <div className="z-50 col-span-6 bg-white md:overflow-y-scroll dark:bg-black-secondary dark:text-light-grey md:h-screen">
          <article className="flex flex-col items-center justify-center min-h-screen mr-auto max-w-7xl">
            <div className="flex h-full no-scrollbar">
              <motion.div
                variants={stagger}
                className="px-5 py-16 space-y-10 md:px-10 lg:py-20 xl:px-20 2xl:px-40"
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
                {logo && (
                  <motion.div variants={fadeInUp}>
                    <figure>
                      <ExportedImage
                        objectFit="contain"
                        priority={true}
                        src={logo}
                        alt={title}
                        width="100%"
                        height="70"
                      />
                    </figure>
                  </motion.div>
                )}
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
                          rel="noreferrer"
                          className="px-5 py-2 font-semibold text-white transition-all duration-200 rounded whitespace-nowrap bg-highlight hover:bg-highlight-hover dark:bg-highlight-dark dark:hover:bg-highlight-dark-hover"
                        >
                          View Live
                        </a>
                        <a
                          target="_blank"
                          rel="noreferrer"
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

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const filePath = path.join(process.cwd(), "data/projects.json");
  const jsonData = await fsPromises.readFile(filePath);
  const projectsData = await JSON.parse(jsonData);

  // Get the paths we want to pre-render based on posts
  const paths = projectsData.map((project) => ({
    params: { id: project.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  // Call an external API endpoint to get posts
  const filePath = path.join(process.cwd(), "data/projects.json");
  const jsonData = await fsPromises.readFile(filePath);
  const projectsData = JSON.parse(jsonData);
  const project = projectsData[params.id - 1];

  // Pass post data to the page via props
  return { props: project };
}

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
