import { getStringInterval } from "utils/getMinMaxValue";
import { Product } from "types/product";
import Link from "next/link";
import { Engine } from "types/engine";
import { slug } from "utils/slug";

type Props = {
  product: Product;
};

const EngineCard: React.FC<Props> = ({ product }) => {
  const {
    imageUrl,
    category,
    starter,
    brand,
    model,
    power,
    cylinderVolume,
    id,
  } = product as Engine;

  const weightList = starter.map((s) => s.weight);

  return (
    <Link
      href={`/engine/details/${slug(id)}/${slug(brand)}/${slug(model)}`}
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
          <p className="text-lg font-bold">
            {brand} {model}
          </p>
          <p className="text-lg">cilindrée: {cylinderVolume} cc</p>
          <p className="text-lg">
            puissance: {power.hp} Cv at {power.rpm} rpm
          </p>
          <p className="text-lg">poid: {getStringInterval(weightList, "kg")}</p>
        </div>
      </div>
    </Link>
  );
};

export default EngineCard;
