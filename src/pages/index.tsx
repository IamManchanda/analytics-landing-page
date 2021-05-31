import Head from "next/head";
import NavHeader from "../components/nav-header";
import JumboHero from "../components/jumbo-hero";

function PageIndex() {
  return (
    <>
      <Head>
        <title>Analytics Landing Page Clone</title>
      </Head>
      <div className="mx-auto max-w-75r">
        <NavHeader />
        <JumboHero />
      </div>
    </>
  );
}

export default PageIndex;
