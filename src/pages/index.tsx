import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>devjobs - Frontend Mentor Challenge</title>
        <meta
          name="description"
          content="devjobs - Frontend Mentor Challenge"
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main className={styles.main}></main>
    </div>
  );
};

export default Home;
