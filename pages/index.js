import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

//import layout
import Layout from "../components/layout/layout";

// import components
import Intro from "../components/hero/intro";
import Projects from "../components/projects/projects";
import About from "../components/about/about";
import Modal from "../components/modal";

import { constants } from "../libs/constants";
import useWindowSize from "../hooks/useWindowSize";

export default function Home(props) {
  const { site_name, site_author, site_description } = constants;
  const [modalOpen, setModalOpen] = useState(false);

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

        {modalOpen && <Modal props={props} setModalOpen={setModalOpen} />}
        <Layout setModalOpen={setModalOpen}>
          <div className="max-w-7xl mx-auto px-10">
            <Intro setModalOpen={setModalOpen} />
            <Projects runAnimation={isMobile ? false : true} />
          </div>
          <About />
        </Layout>
      </motion.div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      public_key: process.env.EMAILJS_PUBLIC_KEY,
      private_key: process.env.EMAILJS_PRIVATE_KEY,
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
    },
  };
}
