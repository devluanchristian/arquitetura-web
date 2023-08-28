import fs from "fs/promises";

const viewBanco = "src/banco.json";

export async function getData() {
  try {
    const dados = await fs.readFile(viewBanco, "utf8");
    const jsonData = JSON.parse(dados);
    return jsonData;
  } catch (erro) {
    console.error("Erro ao ler o arquivo:", erro);
  }
}
