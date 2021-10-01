import { Product, TypeProduct } from "types/product";

import EngineCard from "./category/EngineCard";
import ParamotorCard from "./category/ParamotorCard";
import PropellerCard from "./category/PropellerCard";
import SeatCard from "./category/SeatCard";
import WingCard from "./category/WingCard";

type Props = {
  product: Product;
  category: TypeProduct;
};

const Card: React.FC<Props> = ({ product, category }) => {
  const productMapping = {
    engine: EngineCard,
    paramotor: ParamotorCard,
    propeller: PropellerCard,
    seat: SeatCard,
    wing: WingCard,
  };

  const Component = productMapping[category];

  return <Component product={product} />;
};

export default Card;
