import XLSX from "xlsx";
import { ResultDataRaw, TreinoInput } from "./types";

function loadHomeOrAwayData(path: string): TreinoInput[] {
  const workbook = XLSX.readFile(path);
  const sheet = workbook.Sheets["CasaFora"];

  const jsonData = XLSX.utils.sheet_to_json<ResultDataRaw>(sheet);

  const dataset: TreinoInput[] = jsonData
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

export { loadHomeOrAwayData };
