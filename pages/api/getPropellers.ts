import type { NextApiRequest, NextApiResponse } from "next";

import { propeller } from "../../mocks/propellers";
import { Propeller } from "../../types/propeller";

export const getPropellers = async (): Promise<Propeller[]> => {
  return propeller;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const propellers = await getPropellers();
  res.status(200).json(propellers);
};

export default handler;
