import Grid from "components/Grid/Grid";
import Layout from "layout/index";
import SeatCard from "components/Cards/SeatCard";
import { GetStaticProps } from "next";
import { Seat } from "types/seat";
import { getSeats } from "pages/api/get/seats";

interface Props {
  seats: Seat[];
}

const Seats: React.FC<Props> = ({ seats }) => {
  return (
    <Layout>
      <Grid list={seats} Component={SeatCard} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      seats: await getSeats(),
    },
  };
};

export default Seats;
