import Link from "next/link";

import Grid from "components/Grid/Grid";
import Layout from "layout/index";
import EngineCard from "components/Cards/EngineCard";
import { Engine } from "types/engine";
import { getEngines } from "pages/api/get/engines";
import { GetStaticProps } from "next";

interface Props {
  engines: Engine[];
}

const Engines: React.FC<Props> = ({ engines }) => {
  return (
    <Layout>
      <div className="w-full flex justify-center">
        <Link href="/add/engine">
          <a>ajouter un moteur</a>
        </Link>
      </div>

      <Grid list={engines} Component={EngineCard} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      engines: await getEngines(),
    },
  };
};

export default Engines;
