import Grid from "../components/Grid/Grid";
import Layout from "../Layout/index";
import PropellerCard from "../components/Cards/PropellerCard";
import { GetStaticProps } from "next";
import { Propeller } from "../types/propeller";
import { getPropellers } from "./api/getPropellers";

interface Props {
  propellers: Propeller[];
}

const Propellers: React.FC<Props> = ({ propellers }) => {
  return (
    <Layout>
      <Grid list={propellers} Component={PropellerCard} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      propellers: await getPropellers(),
    },
  };
};
export default Propellers;
