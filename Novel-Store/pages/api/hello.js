// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import express  from 'express';
const router = express.Router();
import initDB from '../../databaseConnection/initDB'

initDB();



export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })

}

