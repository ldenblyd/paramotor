import { NextApiHandler } from "next";
import { getSession } from "next-auth/react";
import prisma from "plugins/prisma";

type List = {
  value: string;
  label: string;
};

export const getBrandList = async (): Promise<List[]> => {
  const brandList = await prisma.brand.findMany({
    select: { name: true, id: true },
  });
  return brandList.map((b) => ({ value: b.id, label: b.name }));
};

const handler: NextApiHandler = async (req, res) => {
  const { name } = req.body;

  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: "not logged" });
  }
  if (!name) {
    return res.status(400).json({ message: "no name" });
  }

  await prisma.brand.create({
    data: {
      name,
      author: { connect: { email: session?.user?.email } },
    },
  });

  res.json(await getBrandList());
};

export default handler;
