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
  switch (category) {
    case "engine":
      return <EngineCard product={product} />;
    case "paramotor":
      return <ParamotorCard product={product} />;
    case "propeller":
      return <PropellerCard product={product} />;
    case "seat":
      return <SeatCard product={product} />;
    case "wing":
      return <WingCard product={product} />;
    default:
      return <div>fail</div>;
  }
};

export default Card;
