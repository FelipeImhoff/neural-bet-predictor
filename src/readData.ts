import XLSX from "xlsx";
import {
  HomeOrAwayResultDataRaw,
  Home05ResultDataRaw,
  Home05InputTraining,
  HomeOrAwayInputTraining,
} from "./types";

function loadHomeOrAwayData(path: string): HomeOrAwayInputTraining[] {
  const workbook = XLSX.readFile(path);

  const sheet = workbook.Sheets["CasaFora"];

  const jsonData = XLSX.utils.sheet_to_json<HomeOrAwayResultDataRaw>(sheet);

  const dataset: HomeOrAwayInputTraining[] = jsonData
    .filter(
      (row) =>
        typeof row["Mandante"] === "number" &&
        typeof row["Visitante"] === "number" &&
        typeof row["Média (%)"] === "number" &&
        typeof row["Diferença (%)"] === "number" &&
        typeof row["Diferença (ABS)"] === "number" &&
        (row.Resultado === "Green" || row.Resultado === "Red")
    )
    .map((row) => ({
      input: {
        mandante: row["Mandante"],
        visitante: row["Visitante"],
        media: row["Média (%)"],
        dif: row["Diferença (%)"],
        difAbs: row["Diferença (ABS)"],
      },
      output: {
        resultado: row.Resultado === "Green" ? 1 : 0,
      },
    }));

  return dataset;
}

function loadHome05Data(path: string): Home05InputTraining[] {
  const workbook = XLSX.readFile(path);
  const sheet = workbook.Sheets["Casa+0,5"];

  const jsonData = XLSX.utils.sheet_to_json<Home05ResultDataRaw>(sheet);

  const dataset: Home05InputTraining[] = jsonData
    .filter(
      (row) =>
        typeof row["Mandante"] === "number" &&
        typeof row["Visitante"] === "number" &&
        typeof row["Média gols mandante"] === "number" &&
        typeof row["Média gols visitante"] === "number" &&
        typeof row["Média (%)"] === "number" &&
        typeof row["Diferença (%)"] === "number" &&
        typeof row["Diferença (ABS)"] === "number" &&
        typeof row["Média Gols"] === "number" &&
        typeof row["Força Local"] === "number" &&
        typeof row["Força Local (ABS)"] === "number" &&
        (row.Resultado === "Green" || row.Resultado === "Red")
    )
    .map((row) => ({
      input: {
        mandante: row["Mandante"],
        visitante: row["Visitante"],
        mediaGolsMandante: row["Média gols mandante"] / 10,
        mediaGolsVisitante: row["Média gols visitante"] / 10,
        media: row["Média (%)"],
        dif: row["Diferença (%)"],
        difAbs: row["Diferença (ABS)"],
        mediaGols: row["Média Gols"] / 10,
        forcaLocal: row["Força Local"] / 10,
        forcaLocalAbs: row["Força Local (ABS)"] / 10,
      },
      output: {
        resultado: row.Resultado === "Green" ? 1 : 0,
      },
    }));

  return dataset;
}

export { loadHomeOrAwayData, loadHome05Data };
