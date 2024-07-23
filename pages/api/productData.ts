import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: number;
  title: string;
  oldPrice: number;
  price: number;
  image: string;
  description: string;
  category: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const productData = await (
    await fetch("https://fakestoreapi.com/products")
  ).json();

  res.status(200).json(productData);
}
