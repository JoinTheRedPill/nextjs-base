import { getSession } from "next-auth/react";
import { NextPageContext } from "next";

import { SignInTemplate } from "@templates";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Page = () => {
  return <SignInTemplate />;
};

export default Page;

export async function getServerSideProps(context: NextPageContext) {
  const { req, locale = "es" } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "signin"])),
    },
  };
}
