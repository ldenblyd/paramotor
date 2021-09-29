// import type { NextApiRequest, NextApiResponse } from "next";

import { Product, TypeProduct } from "types/product";
import { getProducts } from "./products";

export const getProduct = async (
  type: TypeProduct,
  id: string
): Promise<Product> => {
  const products = await getProducts(type);
  console.log("products", id);
  return products.find((p) => p.id === id);
};

// const handler = async (
//   req: NextApiRequest,
//   res: NextApiResponse
// ): Promise<void> => {

//   const products = await getProducts(req.query.typeProduct);
//   res.status(200).json(products);
// };

// export default handler;
