import express from 'express';
import config from 'config';
import bodyParser from 'body-parser';
import routes from './routes'
import db from './db'

const app = express();
const PORT = config.get("port")

app.use(bodyParser.json());


app.listen(PORT, () => {
  console.log(`Application on http://localhost:${PORT}`);
  db();
  routes(app);
})