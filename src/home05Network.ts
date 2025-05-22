import { NeuralNetwork } from "brain.js";
import { Home05InputTraining } from "./types";
import { getTestData } from "./home05TestData";

type Home05InputType = Home05InputTraining["input"];
type Home05OutputType = Home05InputTraining["output"];

function trainHome05Network(
  dataset: Home05InputTraining[]
): NeuralNetwork<Home05InputType, Home05OutputType> {
  const net = new NeuralNetwork<Home05InputType, Home05OutputType>({
    hiddenLayers: [20, 10, 5],
    activation: "sigmoid",
  });

  net.train(dataset, {
    iterations: 500000,
    errorThresh: 0.005,
    log: true,
    logPeriod: 500,
    learningRate: 0.02,
  });

  return net;
}

function testHome05Network(
  network: NeuralNetwork<Home05InputType, Home05OutputType>
): void {
  console.log("Casa +0,5");

  const testData = getTestData();

  for (let item of testData) {
    const result = network.run(item);
    console.log(
      "Chance do time da casa fazer gol:",
      result.resultado.toFixed(3)
    );
  }
}

export { trainHome05Network, testHome05Network };
