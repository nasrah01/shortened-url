import { AnyObjectSchema, object, string } from 'yup';
import {Request, Response, NextFunction } from 'express';

export const validateResource = (resourceSchema: AnyObjectSchema) => async (req: Request, res:Response, next: NextFunction) => {
  try {
    
    await resourceSchema.validate({
      body: req.body,
      query: req.query,
      params: req.params
    });
    next();
  } catch (error) {
    return res.status(401).json({sucess: false})
  }
}

export default object({
  body: object({
    destination: string().required("Destination is required"),
  }),
});

