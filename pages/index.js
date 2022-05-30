import { useState, useEffect } from "react";
import Head from "next/head";

import ThemeSwitch from "../components/layout/Theme-switch";

//import layout
import Layout from "../components/layout/layout";

// import components
import Intro from "../components/hero/intro";
import Projects from "../components/projects/projects";
import About from "../components/about/about";
import Modal from "../components/modal";

import { constants } from "../libs/constants";
import useWindowSize from "../hooks/useWindowSize";
import LoadingAnimation from "../components/hero/loading-animation";

export default function Home(props) {
  const { site_name, site_author, site_description } = constants;
  const [modalOpen, setModalOpen] = useState(false);
  // check if local storage has

  const [isLoading, setIsLoading] = useState(false);

  // //for loading animation on first load
  // useEffect(() => {
  //   const showLoader = localStorage.getItem("showLoader");
  //   showLoader === "false" ? setIsLoading(false) : setIsLoading(true);

  //   setTimeout(() => {
  //     console.log("loaded");
  //     setIsLoading(false);
  //     localStorage.setItem("showLoader", false);
  //   }, 1000);
  // }, []);

  // check if device is mobile - used mostly to stop some animations on mobile
  const isMobile = useWindowSize().width < 768;
  return (
    <>
      <div>
        <Head>
          <title>
            {site_author}
            {" | "}
            {site_name}
          </title>
          <meta name="description" content={site_description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ThemeSwitch />
        {modalOpen && <Modal props={props} setModalOpen={setModalOpen} />}
        <Layout setModalOpen={setModalOpen}>
          <Intro setModalOpen={setModalOpen} />
          <Projects runAnimation={isMobile ? false : true} />
          <About />
        </Layout>
      </div>
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
