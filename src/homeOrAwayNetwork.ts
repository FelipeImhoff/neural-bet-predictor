import { NeuralNetwork } from "brain.js";
import { HomeOrAwayInputTraining } from "./types";
import { getTestData } from "./homeOrAwayTestData";

type HomeOrAwayInputType = HomeOrAwayInputTraining["input"];
type HomeOrAwayOutputType = HomeOrAwayInputTraining["output"];

function trainHomeOrAwayNetwork(
  dataset: HomeOrAwayInputTraining[]
): NeuralNetwork<HomeOrAwayInputType, HomeOrAwayOutputType> {
  const net = new NeuralNetwork<HomeOrAwayInputType, HomeOrAwayOutputType>({
    hiddenLayers: [16, 8],
    activation: "sigmoid",
  });

  net.train(dataset, {
    iterations: 500000,
    errorThresh: 0.005,
    log: true,
    logPeriod: 500,
    learningRate: 0.05,
  });

  return net;
}

function testHomeOrAwayNetwork(
  network: NeuralNetwork<HomeOrAwayInputType, HomeOrAwayOutputType>
): void {
  console.log("Casa/Fora");

  const testData = getTestData();

  for (let item of testData) {
    const result = network.run(item);
    console.log(
      "Chance de o jogo ter um vencedor:",
      result.resultado.toFixed(3)
    );
  }
}

export { trainHomeOrAwayNetwork, testHomeOrAwayNetwork };
