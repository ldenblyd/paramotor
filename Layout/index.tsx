import Head from "next/head";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>YOUFLY</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="hrv8W8apHCN2Kj2ZgyoPibs_KEWsRg0CucecwdKa9zo" />
      </Head>
      {children}
    </div>
  );
};

export default Layout;
