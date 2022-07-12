import "../styles/globals.css";
import { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { SessionProvider, useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

import { Layout } from "@layouts";
import { LayoutType } from "@layouts/types";

interface ComponentProp extends React.ComponentClass<any> {
  layout?: LayoutType;
  requireAuth: boolean;
}

interface ApplicationProps extends React.ComponentClass<AppProps, any> {
  Component: ComponentProp;
  pageProps: any;
}

const App: React.ComponentType<any> = ({
  Component,
  pageProps,
}: ApplicationProps) => {
  return (
    <Layout name={Component.layout as LayoutType}>
      {Component.requireAuth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </Layout>
  );
};

function Auth({ children }: { children: React.ReactNode }): any {
  const { data: session, status } = useSession();
  const user = session?.user;
  const isUser = !!user;

  const router = useRouter();

  useEffect((): any => {
    // Do nothing while loading
    if (status === "loading") return;
    // If not authenticated, force log in
    if (!isUser) return signIn();
  }, [isUser, status, router.route]);

  if (isUser) {
    return children;
  }

  return null;
}

App.displayName = "NextJS Base";

const AppWithI18n = appWithTranslation(App);
const refetchInterval = parseInt(
  process.env.NEXT_PUBLIC_NEXTAUTH_SESSION_REFETCH_IN_SECONDS || "3600"
);

const AppWithAuth = (props: any) => (
  <SessionProvider
    session={props.pageProps.session}
    refetchInterval={refetchInterval}
  >
    <AppWithI18n {...props} />
  </SessionProvider>
);

export default AppWithAuth;
