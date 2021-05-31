import Head from "next/head";
import Image from "next/image";
import NavHeader from "../components/nav-header";
import JumboHero from "../components/jumbo-hero";
import SetForFuture from "../components/set-for-future";

function PageIndex() {
  return (
    <>
      <Head>
        <title>Analytics Landing Page Clone</title>
      </Head>
      <div className="mx-auto max-w-75r">
        <NavHeader />
        <JumboHero />
        <Image
          src="https://pirsch.io/static/img/dashboard-dark.svg"
          width={1200}
          height={768}
          layout="responsive"
        />
        <SetForFuture />
      </div>
    </>
  );
}

export default PageIndex;
