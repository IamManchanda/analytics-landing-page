import "tailwindcss/tailwind.css";

import NavHeader from "../components/nav-header";

function MyApp({ Component, pageProps }) {
  return (
    <div className="mx-auto max-w-75r">
      <NavHeader />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
