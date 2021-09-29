import type { NextApiRequest, NextApiResponse } from "next";

import { seat } from "mocks/seats";
import { Seat } from "types/seat";

export const getSeats = async (): Promise<Seat[]> => {
  return seat;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const seats = await getSeats();
  res.status(200).json(seats);
};

export default handler;
