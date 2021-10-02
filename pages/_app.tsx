import "styles/tailwind.css";
import "styles/common.css";
import { AppProps } from "next/app";
import Head from "next/head";
import usePersistLocaleCookie from "hooks/usePersistLocaleCookie";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  usePersistLocaleCookie();

  return (
    <>
      <Head>
        <title>YOUFLY</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
