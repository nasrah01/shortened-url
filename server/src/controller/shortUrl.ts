import {Request, Response } from 'express';
import shortUrl from '../models/shortUrl';

export const createShortUrl = async (req: Request, res: Response) => {

  const {destination} = req.body;

  const newUrl = await shortUrl.create({destination});

  return res.send(newUrl)
}

export const handleRedirect = async (req: Request, res: Response) => {
  const {shortId} = req.params;

  const dest = await shortUrl.findOne({shortId}).lean();

  if(!dest) {
    return res.status(404).json({success: false})
  }

  return res.redirect(dest?.destination)
}