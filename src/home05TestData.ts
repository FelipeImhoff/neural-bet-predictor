function average(value1: number, value2: number) {
  const result = (value1 + value2) / 2;
  return parseFloat(result.toFixed(4));
}

function difference(value1: number, value2: number): number {
  const result = value1 - value2;
  return parseFloat(result.toFixed(4));
}

function normalizeGoals(goals: number) {
  return goals / 10;
}

function getTestData() {
  const basicData = [
    {
      mandante: 0.8182,
      visitante: 0.6959,
      mediaGolsMandante: normalizeGoals(1.18),
      mediaGolsVisitante: normalizeGoals(1.16),
      expectedResult: 1,
    },
    {
      mandante: 0.8,
      visitante: 0.5625,
      mediaGolsMandante: normalizeGoals(1.4),
      mediaGolsVisitante: normalizeGoals(0.88),
      expectedResult: 0,
    },
    {
      mandante: 0.7692,
      visitante: 0.64,
      mediaGolsMandante: normalizeGoals(1.31),
      mediaGolsVisitante: normalizeGoals(1.12),
      expectedResult: 0,
    },
    {
      mandante: 0.7778,
      visitante: 0.9,
      mediaGolsMandante: normalizeGoals(2.33),
      mediaGolsVisitante: normalizeGoals(2.3),
      expectedResult: 1,
    },
    {
      mandante: 0.8991,
      visitante: 0.6,
      mediaGolsMandante: normalizeGoals(2.09),
      mediaGolsVisitante: normalizeGoals(1.05),
      expectedResult: 1,
    },
  ];

  const completeData = basicData.map((item) => {
    return {
      ...item,
      media: average(item.mandante, item.visitante),
      dif: difference(item.mandante, item.visitante),
      difAbs: Math.abs(difference(item.mandante, item.visitante)),
      mediaGols: average(item.mediaGolsMandante, item.mediaGolsVisitante),
      forcaLocal: difference(item.mediaGolsMandante, item.mediaGolsVisitante),
      forcaLocalAbs: Math.abs(
        difference(item.mediaGolsMandante, item.mediaGolsVisitante)
      ),
    };
  });

  return completeData;
}

export { getTestData };
