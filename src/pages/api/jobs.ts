import type { NextApiRequest, NextApiResponse } from "next";
import jobs from "../../data.json";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(jobs);
}
