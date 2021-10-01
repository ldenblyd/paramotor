import { Product } from "types/product";
import { Seat } from "types/seat";
import { getStringInterval } from "utils/getMinMaxValue";
import Link from "next/link";
import { slug } from "utils/slug";
import Image from "next/image";

type Props = {
  product: Product;
};

export const SeatCard: React.FC<Props> = ({ product }) => {
  const { imageUrl, category, brand, model, size, id } = product as Seat;

  const weightList = size.map((s) => s.weight);
  const heightList = size.reduce((acc, s) => {
    acc.push(s.height.min);
    acc.push(s.height.max);
    return acc;
  }, []);

  return (
    <Link
      href={`/seat/details/${slug(id)}/${slug(brand)}/${slug(model)}`}
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

          <p className="text-lg">
            poid pilote: {getStringInterval(weightList, "kg")}
          </p>

          <p className="text-lg">
            taille pilote: {getStringInterval(heightList, "cm")}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SeatCard;
