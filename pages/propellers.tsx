import Grid from "components/Grid/Grid";
import Layout from "layout/index";
import PropellerCard from "components/Cards/PropellerCard";
import { GetStaticProps } from "next";
import { Propeller } from "types/propeller";
import { getPropellers } from "pages/api/get/propellers";

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
