export interface ResultDataRaw {
  Mandante: number;
  Visitante: number;
  "Média (%)": number;
  "Diferença (%)": number;
  "Diferença (ABS)": number;
  Resultado: "Green" | "Red";
}

export interface TreinoInput {
  input: {
    mandante: number;
    visitante: number;
    media: number;
    dif: number;
    difAbs: number;
  };
  output: {
    resultado: number;
  };
}
