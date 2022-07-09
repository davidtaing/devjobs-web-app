import type { NextPage } from "next";
import Head from "next/head";
import { JobList } from "../features/JobList/components/JobList";
import { SearchBar } from "../components/SearchBar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>devjobs - Frontend Mentor Challenge</title>
        <meta
          name="description"
          content="devjobs - Frontend Mentor Challenge"
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main>
        <SearchBar />
        <JobList />
      </main>
    </>
  );
};

export default Home;
