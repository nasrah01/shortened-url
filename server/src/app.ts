import express from 'express';
import config from 'config';
import bodyParser from 'body-parser';
import cors from "cors";
import routes from './routes'
import db from './db'

const app = express();

app.use(
  cors({
    origin: "CORS_ORIGIN",
  })
);

const PORT = config.get("port") as number;

app.use(bodyParser.json());


app.listen(PORT, "0.0.0.0", () => {
  console.log(`Application on http://localhost:${PORT}`);
  db();
  routes(app);
});