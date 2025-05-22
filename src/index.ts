import { loadHomeOrAwayData, loadHome05Data } from "./readData";
import {
  testHomeOrAwayNetwork,
  trainHomeOrAwayNetwork,
} from "./homeOrAwayNetwork";
import { testHome05Network, trainHome05Network } from "./home05Network";

const homeOrAwayData = loadHomeOrAwayData("./data/analise_de_apostas.xlsx");
const homeOrAwayNetwork = trainHomeOrAwayNetwork(homeOrAwayData);

testHomeOrAwayNetwork(homeOrAwayNetwork);

const home05Data = loadHome05Data("./data/analise_de_apostas.xlsx");
const home05Network = trainHome05Network(home05Data);

testHome05Network(home05Network);
