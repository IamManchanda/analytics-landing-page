import Head from "next/head";
import { getSession } from "next-auth/client";

import UserProfile from "../components/user-profile";

function PageProfile() {
  return (
    <>
      <Head>
        <title>Profile - Next.js Auth Setup</title>
      </Head>
      <UserProfile />
    </>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default PageProfile;
