import type { NextApiRequest, NextApiResponse } from "next";

import { paramotor } from "mocks/paramotors";
import { Paramotor } from "types/paramotor";

export const getParamotors = async (): Promise<Paramotor[]> => {
  return paramotor;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const paramotors = await getParamotors();
  res.status(200).json(paramotors);
};

export default handler;
