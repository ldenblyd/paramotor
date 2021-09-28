import Grid from "../components/Grid/Grid";
import Layout from "../Layout/index";
import ParamotorCard from "../components/Cards/ParamotorCard";
import { GetStaticProps } from "next";
import { Paramotor } from "../types/paramotor";
import { getParamotors } from "./api/getParamotors";

interface Props {
  paramotors: Paramotor[];
}
const Paramotors: React.FC<Props> = ({ paramotors }) => {
  return (
    <Layout>
      <Grid list={paramotors} Component={ParamotorCard} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      paramotors: await getParamotors(),
    },
  };
};

export default Paramotors;
