import "tailwindcss/tailwind.css";

import NavHeader from "../components/nav-header";
import NavFooter from "../components/nav-footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="mx-auto max-w-75r">
      <NavHeader />
      <Component {...pageProps} />
      <NavFooter />
    </div>
  );
}

export default MyApp;
