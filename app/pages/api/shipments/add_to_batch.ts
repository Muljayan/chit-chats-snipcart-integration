import { NextApiRequest, NextApiResponse } from 'next';
import { addToBatch, getShipments } from '../../../utils/chitchats';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
  const body = JSON.parse(req.body);
  const batchResponse = await addToBatch(req.body);
  res.status(200).json({
    message: `Added ${body.shipment_ids} to Batch ${body.batch_id}`,
  });
}