function average(value1: number, value2: number) {
  const result = (value1 + value2) / 2;
  return parseFloat(result.toFixed(4));
}

function difference(value1: number, value2: number): number {
  const result = value1 - value2;
  return parseFloat(result.toFixed(4));
}

function getTestData() {
  const basicData = [
    {
      mandante: 0.7273,
      visitante: 0.7474,
      expectedResult: 1,
    },
    {
      mandante: 0.6,
      visitante: 0.6875,
      expectedResult: 0,
    },
    {
      mandante: 0.5385,
      visitante: 0.76,
      expectedResult: 1,
    },
    {
      mandante: 0.7778,
      visitante: 0.7,
      expectedResult: 1,
    },
    {
      mandante: 0.8532,
      visitante: 0.95,
      expectedResult: 0,
    },
  ];

  const completeData = basicData.map((item) => {
    return {
      ...item,
      media: average(item.mandante, item.visitante),
      dif: difference(item.mandante, item.visitante),
      difAbs: Math.abs(difference(item.mandante, item.visitante)),
    };
  });

  return completeData;
}

export { getTestData };
