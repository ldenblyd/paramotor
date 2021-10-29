import Grid from "components/grid/Grid";
import Layout from "layout/index";
import { Product, TypeProduct } from "types/product";
import { getProducts } from "pages/api/get/products";
import { GetStaticPaths, GetStaticProps } from "next";
import Button from "components/Button";
import Drawer from "components/Drawer";
import { useState } from "react";
import AddEngine from "components/add/AddEngine";

type Props = {
  products: Product[];
  category: TypeProduct;
};

const List: React.FC<Props> = ({ products, category }) => {
  const [drawerOpened, setDrawerOpened] = useState(false);

  return (
    <Layout>
      <Grid products={products} category={category} />
      <div className="w-full flex justify-end uppercase">
        <Button
          onClick={() => setDrawerOpened(true)}
          label={`ajouter un ${category}`}
        />
      </div>

      <Drawer
        isOpen={drawerOpened}
        title="Add new engine"
        Content={AddEngine}
        Footer={() => (
          <>
            <div>
              <Button onClick={() => setDrawerOpened(false)} label={`add`} />
            </div>
            <div className="pt-4">
              <Button onClick={() => setDrawerOpened(false)} label={`cancel`} />
            </div>
          </>
        )}
      ></Drawer>
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
