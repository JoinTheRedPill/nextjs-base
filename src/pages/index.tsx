import { HomeTemplate } from "@templates";
import { LayoutType } from "@layouts/types";

const Page = () => {
  return <HomeTemplate />;
};

export default Page;

Page.requireAuth = false;
Page.layout = LayoutType.DASHBOARD;
