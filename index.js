import express from "express";
const app = express();
import path from "path";

import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/resume.pdf", (req, res) => {
  res.sendFile(path.join(__dirname + "/resume.pdf"));
});

app.listen(8080, () => {
  console.log("ON PORT 8080!");
});
