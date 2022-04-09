import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

//import layout
import Layout from "../components/layout";

import { constants } from "../libs/constants";

export default function Home() {
  const { site_name, site_author, site_description } = constants;
  return (
    <div className={styles.container}>
      <Head>
        <title>
          {site_author}
          {" | "}
          {site_name}
        </title>
        <meta name="description" content={site_description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout></Layout>
    </div>
  );
}
