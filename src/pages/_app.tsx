import MainLayout from "../components/main-layout";
import "../assets/styles/scss/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
