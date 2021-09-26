import Head from "next/head";

import { seat } from "../data/seat";
import { SeatCard } from "../components/cards/SeatCard";
import Layout from "../components/Layout/index";

export default function Seats() {
  return (
    <Layout>
      <Head>
        <title>Awesome Links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto max-w-5xl my-20">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {seat.map((seat) => (
            <li key={seat.id}>
              <SeatCard {...seat} />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
