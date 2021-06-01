import "tailwindcss/tailwind.css";

import NavHeader from "../components/nav-header";
import NavFooter from "../components/nav-footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="px-4 mx-auto max-w-75r wrap:px-0">
      <NavHeader />
      <Component {...pageProps} />
      <NavFooter />
    </div>
  );
}

export default MyApp;
