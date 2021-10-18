import Head from "next/head";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>YOUFLY</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="g6ZatC2NQn1IE8qjWh9lHmGZl-C4dJlKtbthRQAw028"
        />
      </Head>
      {children}
    </div>
  );
};

export default Layout;
