import type { NextApiRequest, NextApiResponse } from "next";

import { engines } from "../../mocks/engines";
import { Engine } from "../../types/engine";

export const getEngines = async (): Promise<Engine[]> => {
  return engines;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const engines = await getEngines();
  res.status(200).json(engines);
};

export default handler;
