import { Express, Request, Response } from "express";
import { createShortUrl, handleRedirect } from '../controller/shortUrl';
import shortUrlschema, {validateResource} from "../middleware/validate";

function routes(app: Express) {
  app.get('/healthcheck', (req: Request, res: Response) => {
    return res.send("app is healthy")
  });

  app.post("/api/url",  validateResource(shortUrlschema), createShortUrl);

  app.get('/:shortId', handleRedirect)
}

export default routes;
