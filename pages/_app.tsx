import "styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import usePersistLocaleCookie from "hooks/usePersistLocaleCookie";
import { SessionProvider } from "next-auth/react";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  usePersistLocaleCookie();

  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <title>YOUFLY</title>
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default MyApp;
