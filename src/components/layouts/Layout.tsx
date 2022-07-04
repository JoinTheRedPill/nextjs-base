import Head from "next/head";

import { DashboardLayout } from "./dashboard";
import { default as Providers } from "./Providers";
import { LayoutType } from "./types";

const renderWithLayout = ({
  name,
  children,
}: {
  name: LayoutType;
  children: React.ReactNode;
}) => {
  switch (name) {
    case LayoutType.DASHBOARD:
      return <DashboardLayout>{children}</DashboardLayout>;

    default:
      return <>{children}</>;
  }
};

const Layout = ({
  name,
  children,
}: {
  name: LayoutType;
  children: React.ReactNode;
}) => {
  return (
    <Providers>
      <Head>
        <meta charSet="utf-8" />
        <meta content="text/html;charset=utf-8" httpEquiv="Content-Type" />
        <meta content="utf-8" httpEquiv="encoding" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div data-theme="theme-base">{renderWithLayout({ name, children })}</div>
    </Providers>
  );
};

export default Layout;
