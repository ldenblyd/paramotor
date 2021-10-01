import "styles/tailwind.css";
import "styles/common.css";
import { AppProps } from "next/app";
import Head from "next/head";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
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
