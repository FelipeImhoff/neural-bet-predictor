import { NeuralNetwork } from "brain.js";
import { TreinoInput } from "./types";

type InputType = TreinoInput["input"];
type OutputType = TreinoInput["output"];

function trainHomeOrAwayNetwork(
  dataset: TreinoInput[]
): NeuralNetwork<InputType, OutputType> {
  const net = new NeuralNetwork<InputType, OutputType>({
    hiddenLayers: [16, 8],
    activation: "sigmoid",
  });

  net.train(dataset, {
    iterations: 500000,
    errorThresh: 0.005,
    //log: true,
    logPeriod: 500,
    learningRate: 0.05,
  });

  return net;
}

function testHomeOrAwayNetwork(
  network: NeuralNetwork<InputType, OutputType>
): void {
  const test = {
    mandante: 0.8824,
    visitante: 1,
    media: 0.9412,
    dif: 0.1176,
    difAbs: -0.1176,
  };

  const test2 = {
    mandante: 0.6,
    visitante: 0.6875,
    media: 0.64375,
    dif: 0.0875,
    difAbs: -0.0875,
  };

  const result = network.run(test);
  const result2 = network.run(test2);
  console.log("Chance da casa vencer:", result.resultado.toFixed(3));
  console.log("Chance da casa vencer:", result2.resultado.toFixed(3));
}

export { trainHomeOrAwayNetwork, testHomeOrAwayNetwork };
