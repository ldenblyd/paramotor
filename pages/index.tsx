import Head from "next/head";

import { engines } from "../data/engine";
import { EngineCard } from "../components/cards/EngineCard";

import { paramotor } from "../data/paramotor";
import { ParamotorCard } from "../components/cards/ParamotorCard";

import { propeller } from "../data/propeller";
import { PropellerCard } from "../components/cards/PropellerCard";

import { seat } from "../data/seat";
import { SeatCard } from "../components/cards/SeatCard";

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
          {paramotor.map((paramotor) => (
            <ParamotorCard {...paramotor} />
          ))}
        </ul>
      </div>

      <div className="container mx-auto max-w-5xl my-20">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {seat.map((seat) => (
            <SeatCard {...seat} />
          ))}
        </ul>
      </div>

      <div className="container mx-auto max-w-5xl my-20">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {engines.map((engine) => (
            <EngineCard {...engine} />
          ))}
        </ul>
      </div>

      <div className="container mx-auto max-w-5xl my-20">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {propeller.map((propeller) => (
            <PropellerCard {...propeller} />
          ))}
        </ul>
      </div>

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
