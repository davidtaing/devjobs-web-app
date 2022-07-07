import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";

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
      <Header />

      <main className={styles.main}>
        <SearchBar />
      </main>
    </div>
  );
};

export default Home;
