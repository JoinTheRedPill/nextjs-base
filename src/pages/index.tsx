import { NextPageContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { HomeTemplate } from "@templates";
import { LayoutType } from "@layouts/types";

const Page = () => {
  return <HomeTemplate />;
};

export default Page;

export const getServerSideProps = async ({
  locale = "es",
}: NextPageContext) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

Page.requireAuth = true;
Page.layout = LayoutType.DASHBOARD;
