import type { NextApiRequest, NextApiResponse } from "next";

import { wing } from "mocks/wings";
import { Wing } from "types/wing";

export const getWings = async (): Promise<Wing[]> => {
  return wing;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const wings = await getWings();
  res.status(200).json(wings);
};

export default handler;
