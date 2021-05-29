import Head from "next/head";
import { getSession } from "next-auth/client";

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

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default PageAuth;
