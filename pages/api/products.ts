import { NextApiRequest, NextApiResponse } from "next";

export default async function postProducts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    console.log("Cart Details", req.body);
  }
  res.status(200).json({
    message: "Getting order details... ⏰",
    data: req.body,
  });
}
