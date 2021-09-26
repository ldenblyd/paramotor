import Head from "next/head";

import { wing } from "../data/wing";
import { WingCard } from "../components/cards/WingCard";

import Layout from "../components/Layout/index";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Awesome Links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto max-w-5xl my-20">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {wing.map((wing) => (
            <WingCard {...wing} />
          ))}
        </ul>
      </div>
    </Layout>
  );
}
