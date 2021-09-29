import Layout from "layout/index";
import { Product, TypeProduct } from "types/product";
import { GetStaticPaths, GetStaticProps } from "next";
import { getProduct } from "pages/api/get/product";

type Props = {
  product: Product;
  category: TypeProduct;
};

const PrettyPrintJson = ({ data }) => {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

const Details: React.FC<Props> = ({ product, category }) => {
  console.log(category, product);
  return (
    <Layout>
      <div>
        <PrettyPrintJson data={product} />
      </div>
    </Layout>
  );
};

type Context = {
  params: {
    category: TypeProduct;
    id: string;
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({
  params,
}: Context) => {
  return {
    props: {
      product: await getProduct(params.category, params.id),
      category: params.category,
    },
  };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default Details;
