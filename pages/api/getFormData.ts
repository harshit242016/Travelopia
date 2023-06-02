// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import getUserDetails from '../../utils/getUserDetails';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method === 'GET') {
      const response : any = await getUserDetails();
      console.log(response);
      res.status(200).json(response);
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end('Method Not Allowed');
    }
  }