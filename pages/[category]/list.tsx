import Grid from "components/grid/Grid";
import Layout from "layout/index";
import { Product, TypeProduct } from "types/product";
import { getProducts } from "pages/api/get/products";
import { GetStaticPaths, GetStaticProps } from "next";

type Props = {
  products: Product[];
  category: TypeProduct;
};

const List: React.FC<Props> = ({ products, category }) => {
  return (
    <Layout>
      {/* <div className="w-full flex justify-end uppercase">
        <Link href="/engines/add">
          <a>ajouter un moteur</a>
        </Link>
      </div> */}

      <Grid products={products} category={category} />
    </Layout>
  );
};

type Context = {
  params: {
    category: TypeProduct;
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({
  params,
}: Context) => {
  return {
    props: {
      products: await getProducts(params.category),
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

export default List;
