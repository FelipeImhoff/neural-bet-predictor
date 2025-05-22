export interface HomeOrAwayResultDataRaw {
  Mandante: number;
  Visitante: number;
  "Média (%)": number;
  "Diferença (%)": number;
  "Diferença (ABS)": number;
  Resultado: "Green" | "Red";
}

export interface HomeOrAwayInputTraining {
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

export interface Home05ResultDataRaw {
  Mandante: number;
  Visitante: number;
  "Média gols mandante": number;
  "Média gols visitante": number;
  Resultado: string;
  "Média (%)": number;
  "Diferença (%)": number;
  "Diferença (ABS)": number;
  "Média Gols": number;
  "Força Local": number;
  "Força Local (ABS)": number;
}

export interface Home05InputTraining {
  input: {
    mandante: number;
    visitante: number;
    mediaGolsMandante: number;
    mediaGolsVisitante: number;
    media: number;
    dif: number;
    difAbs: number;
    mediaGols: number;
    forcaLocal: number;
    forcaLocalAbs: number;
  };
  output: {
    resultado: number;
  };
}
