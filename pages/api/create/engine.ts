import { NextApiHandler } from "next";
import { getSession } from "next-auth/react";
import prisma from "plugins/prisma";

const handler: NextApiHandler = async (req, res) => {
  const { brand, model, cylinderVolume } = req.body;

  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: "not logged" });
  }
  if (!brand || !model || !cylinderVolume) {
    return res.status(400).json({ message: "invalid" });
  }

  const result = await prisma.engine.create({
    data: {
      brand: { connect: { id: brand } },
      model,
      cylinderVolume,
      author: { connect: { email: session?.user?.email } },
    },
  });

  res.json(result);
};

export default handler;
