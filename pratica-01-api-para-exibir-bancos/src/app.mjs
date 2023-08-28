import express from "express";
import { bankController } from "./controllers/bankController.mjs";
import { getData } from "./models/bankModel.mjs"; // Substitua pelo caminho correto para o arquivo onde está a função getData
import path from "path";

export const app = express();

app.use(express.json());

app.use(bankController);

app.set(
  "views",
  path.join(path.dirname(new URL(import.meta.url).pathname), "views")
);
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  try {
    const jsonData = await getData();
    res.render("index", { jsonData });
  } catch (error) {
    res.status(500).send("Erro ao obter os dados do arquivo.");
  }
});
