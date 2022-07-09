import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import { JobList } from "../features/JobList/components/JobList";
import { SearchBar } from "../components/SearchBar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>devjobs - Frontend Mentor Challenge</title>
        <meta
          name="description"
          content="devjobs - Frontend Mentor Challenge"
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Header />

      <main>
        <SearchBar />
        <JobList />
      </main>
    </div>
  );
};

export default Home;
