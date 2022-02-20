import { Express, Request, Response } from "express";
import { createShortUrl } from '../controller/shortUrl'

function routes(app: Express) {
  app.get('/healthcheck', (req: Request, res: Response) => {
    return res.send("app is healthy")
  });

  app.post("/api/url", createShortUrl);
}

export default routes;
