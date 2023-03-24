import type { NextApiRequest, NextApiResponse } from "next";
import request from "@/utils/request";

const url = process.env.NEXT_PUBLIC_BACKEND_URL;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const product = await request({url: `${url}/sample/data_detail.json`, method: 'GET'});
  return res.json(product);
}
