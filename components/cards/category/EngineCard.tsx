// import { getStringInterval } from "utils/getMinMaxValue";
import { Product } from "types/product";
import Link from "next/link";
import { Engine } from "types/engine";
import { slug } from "utils/slug";
import Image from "next/image";

type Props = {
  product: Product;
};

const EngineCard: React.FC<Props> = ({ product }) => {
  const { imageUrl, category, brand, model, id } = product as Engine;

  // const weightList = starter.map((s) => s.weight);

  return (
    <Link
      href={`/engine/details/${slug(id)}/${slug(brand)}/${slug(model)}`}
      passHref
    >
      <div className="shadow max-w-md rounded cursor-pointer">
        <div className="shadow-sm square">
          <Image
            src={imageUrl}
            alt={`${brand} ${model}`}
            width={328}
            height={328}
          />
        </div>

        <div className="p-5 flex flex-col space-y-2">
          <p className="text-sm text-blue-500">{category}</p>
          <p className="text-lg font-bold">
            {brand} {model}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default EngineCard;
