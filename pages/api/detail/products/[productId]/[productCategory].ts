import type { NextApiRequest, NextApiResponse } from "next";
import request from "@/utils/request";

const url = process.env.NEXT_PUBLIC_BACKEND_URL;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query;
  const { productId, productCategory } = query;
  let url_api = `${url}/sample/data_detail.json`;
  if (productCategory == "otomotif") {
    url_api = `${url}/sample/detail_otomotif.json`;
  }
  const product = await request({url: url_api, method: 'GET'});
  return res.json(product);
}
