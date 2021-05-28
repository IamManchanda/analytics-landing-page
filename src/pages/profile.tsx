import Head from "next/head";

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

export default PageProfile;
