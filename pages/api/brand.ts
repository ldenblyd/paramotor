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

const postBrand: NextApiHandler = async (req, res) => {
  const { name } = req.body;

  const session = await getSession({ req });
  if (!session) {
    return res.status(401).end("not logged");
  }
  if (!name) {
    return res.status(400).end("no name");
  }

  await prisma.brand.create({
    data: {
      name,
      author: { connect: { email: session?.user?.email } },
    },
  });

  res.json(await getBrandList());
};

const handler: NextApiHandler = async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      res.json(await getBrandList());
      break;
    case "POST":
      postBrand(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
