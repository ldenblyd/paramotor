import Grid from "components/Grid/Grid";
import Layout from "layout/index";
import WingCard from "components/Cards/WingCard";
import { Wing } from "types/wing";
import { GetStaticProps } from "next";
import { getWings } from "pages/api/get/wings";

interface Props {
  wings: Wing[];
}

const Wings: React.FC<Props> = ({ wings }) => {
  return (
    <Layout>
      <Grid list={wings} Component={WingCard} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      wings: await getWings(),
    },
  };
};

export default Wings;
