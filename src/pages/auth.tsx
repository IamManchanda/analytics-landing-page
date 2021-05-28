import Head from "next/head";

import AuthForm from "../components/auth-form";

function PageAuth() {
  return (
    <>
      <Head>
        <title>Login - Next.js Auth Setup</title>
      </Head>
      <AuthForm />
    </>
  );
}

export default PageAuth;
