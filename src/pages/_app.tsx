import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { JobsContextProvider } from "../features/Jobs";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <JobsContextProvider>
        <Component {...pageProps} />
      </JobsContextProvider>
    </>
  );
}

export default MyApp;
