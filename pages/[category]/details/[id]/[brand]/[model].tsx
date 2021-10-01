import Layout from "layout/index";
import { Product, TypeProduct } from "types/product";
import { GetStaticPaths, GetStaticProps } from "next";
import { getProduct } from "pages/api/get/product";
import Image from "next/image";

type Props = {
  product: Product;
  category: TypeProduct;
};

const Details: React.FC<Props> = ({ product, category }) => {
  console.log(category, product);
  return (
    <Layout>
      <div className="flex">
        <div className="w-1/2">
          <Image
            src={product.imageUrl}
            alt={`${product.brand} ${product.model}`}
            width={500}
            height={500}
          />
        </div>
        <div className="w-1/2 capitalize">
          <h1 className="text-xl font-bold">{product.model}</h1>
          <h2>{product.brand}</h2>
        </div>
      </div>
      <div>
        <p>{product.description}</p>
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
