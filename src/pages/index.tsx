import Head from "next/head";
import HomePage from "../components/home-page";

function PageIndex() {
  return (
    <>
      <Head>
        <title>Home - Next.js Auth Setup</title>
      </Head>
      <HomePage />
    </>
  );
}

export default PageIndex;
