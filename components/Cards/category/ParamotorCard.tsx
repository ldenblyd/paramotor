import { Paramotor } from "types/paramotor";
import { Product } from "types/product";
import Link from "next/link";
import { slug } from "utils/slug";

type Props = {
  product: Product;
};

const ParamotorCard: React.FC<Props> = ({ product }) => {
  const { imageUrl, category, brand, model, id } = product as Paramotor;
  return (
    <Link
      href={`/paramotor/details/${slug(id)}/${slug(brand)}/${slug(model)}`}
      passHref
    >
      <div className="shadow max-w-md rounded cursor-pointer">
        <img
          className="shadow-sm square"
          src={imageUrl}
          alt={`${brand} ${model}`}
        />
        <div className="p-5 flex flex-col space-y-2">
          <p className="text-sm text-blue-500">{category}</p>
          <p className="text-lg font-medium">
            {brand} {model}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ParamotorCard;
