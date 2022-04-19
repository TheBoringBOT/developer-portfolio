import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

//import modal
import Modal from "../components/modal";

//import layout
import Layout from "../components/layout";

// import components
import Intro from "../components/hero/intro";
import Projects from "../components/projects/projects";
import About from "../components/about/about";

import { constants } from "../libs/constants";
import useWindowSize from "../hooks/useWindowSize";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const { site_name, site_author, site_description } = constants;

  // check if device is mobile - used mostly to stop some animations on mobile
  const isMobile = useWindowSize().width < 768;
  return (
    <>
      <motion.div exit={{ opacity: 0 }}>
        <Head>
          <title>
            {site_author}
            {" | "}
            {site_name}
          </title>
          <meta name="description" content={site_description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Layout setModalOpen={setModalOpen}>
          {modalOpen && <Modal setModalOpen={setModalOpen} />}

          <Intro setModalOpen={setModalOpen} />
          <Projects runAnimation={isMobile ? false : true} />
          <About />
        </Layout>
      </motion.div>
    </>
  );
}
