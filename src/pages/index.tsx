import Head from "next/head";
import Image from "next/image";
import NavHeader from "../components/nav-header";
import JumboHero from "../components/jumbo-hero";
import SetForFuture from "../components/set-for-future";
import EverythingYouExpect from "../components/everything-you-expect";
import ProductFeaturesList from "../components/product-features-list";
import ProductClients from "../components/product-clients";
import CallToAction from "../components/call-to-action";

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
        <EverythingYouExpect />
        <ProductFeaturesList />
        <ProductClients />
        <CallToAction />
      </div>
    </>
  );
}

export default PageIndex;
