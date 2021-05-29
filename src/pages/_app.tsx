import { Provider } from "next-auth/client";

import MainLayout from "../components/main-layout";
import "../assets/styles/scss/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}

export default MyApp;
