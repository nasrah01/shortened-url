import { Express, Request, Response } from "express";

function routes(app: Express) {
  app.get('/healthcheck', (req: Request, res: Response) => {
    return res.send("app is healthy")
  })
}

export default routes;