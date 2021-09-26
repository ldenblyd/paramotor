import Head from "next/head";

import { propeller } from "../data/propeller";
import { PropellerCard } from "../components/cards/PropellerCard";
import Layout from "../components/Layout/index";

export default function Propellers() {
  return (
    <Layout>
      <Head>
        <title>Awesome Links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto max-w-5xl my-20">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {propeller.map((propeller) => (
            <li key={propeller.id}>
              <PropellerCard {...propeller} />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
