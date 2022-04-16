import Head from "next/head";
import Image from "next/image";

//import layout
import Layout from "../components/layout";

// import components
import Intro from "../components/hero/intro";

import { constants } from "../libs/constants";

export default function Home() {
  const { site_name, site_author, site_description } = constants;
  return (
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

      <Layout>
        <Intro />
      </Layout>
    </div>
  );
}
