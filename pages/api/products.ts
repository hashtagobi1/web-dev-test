import { NextApiRequest, NextApiResponse } from "next";

export default async function postProducts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    console.log("req", req.body);
  }
  res.status(200).json({
    data: req.body,
  });
}
