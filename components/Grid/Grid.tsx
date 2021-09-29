import Card from "components/Cards/Card";
import { Product, TypeProduct } from "types/product";

interface Props {
  products: Product[];
  category: TypeProduct;
}

const Grid: React.FC<Props> = ({ products, category }) => {
  return (
    <div className="container mx-auto max-w-5xl my-20">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <li key={product.id}>
            <Card product={product} category={category} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Grid;
