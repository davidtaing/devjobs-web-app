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

      <main className={styles.main}>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illum,
          cupiditate hic voluptatibus laudantium quam assumenda amet ratione
          ipsum dolorum velit harum sapiente, exercitationem modi est doloremque
          nisi officiis esse.
        </p>
      </main>
    </div>
  );
};

export default Home;
