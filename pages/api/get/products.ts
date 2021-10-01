// import type { NextApiRequest, NextApiResponse } from "next";

import { engines } from "mocks/engines";
import { paramotors } from "mocks/paramotors";
import { propellers } from "mocks/propellers";
import { seats } from "mocks/seats";
import { wings } from "mocks/wings";

import { Product, TypeProduct } from "types/product";

export const getProducts = async (type: TypeProduct): Promise<Product[]> => {
  const productsMapping = {
    engine: engines,
    paramotor: paramotors,
    propeller: propellers,
    seat: seats,
    wing: wings,
  };

  return productsMapping[type] || [];
};

// const handler = async (
//   req: NextApiRequest,
//   res: NextApiResponse
// ): Promise<void> => {

//   const products = await getProducts(req.query.typeProduct);
//   res.status(200).json(products);
// };

// export default handler;
