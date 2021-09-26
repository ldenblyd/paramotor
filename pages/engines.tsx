import Head from "next/head";
import { engines } from "../data/engine";
import { EngineCard } from "../components/cards/EngineCard";
import Layout from "../components/Layout/index";

export default function Engines() {
  return (
    <Layout>
      <Head>
        <title>Awesome Links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto max-w-5xl my-20">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {engines.map((engine) => (
            <li key={engine.id}>
              <EngineCard {...engine} />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
