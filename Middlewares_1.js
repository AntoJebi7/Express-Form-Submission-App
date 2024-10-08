import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("tiny"));
app.post('/submit',(req,res) => {
  console.log(req.body.street);
  console.log(req.body.pet);
  res.send(req.body.street+req.body.pet);
})
app.get('/',(req,res) => {
  res.sendFile(__dirname +"/public/index.html");
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
