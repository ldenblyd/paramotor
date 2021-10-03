import { Product, TypeProduct } from "types/product";

import Image from "next/image";
import { slug } from "utils/slug";
import Link from "next/link";
import useProduct from "hooks/useProduct";
import DataTable from "components/DataTable";

type Props = {
  product: Product;
  category: TypeProduct;
};

const Card: React.FC<Props> = ({ product, category }) => {
  const { imageUrl, brand, model, id } = product;

  const { getDataTable } = useProduct();
  return (
    <Link
      href={`/${category}/details/${slug(id)}/${slug(brand)}/${slug(model)}`}
      passHref
    >
      <div className="shadow-lg rounded-xl p-4 m-2 flex bg-white hover:ring-2 cursor-pointer">
        <div className="mr-4 w-40">
          <Image
            src={imageUrl}
            alt={`${brand} ${model}`}
            width={150}
            height={150}
          />
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <p className="capitalize">
            {brand} {model}
          </p>
          <DataTable data={getDataTable(product, category)} />
        </div>
      </div>
    </Link>
  );
};

export default Card;
