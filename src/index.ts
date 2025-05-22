import { loadHomeOrAwayData } from "./readData";
import {
  testHomeOrAwayNetwork,
  trainHomeOrAwayNetwork,
} from "./homeOrAwayNetwork";

const homeOrAwayData = loadHomeOrAwayData("./data/analise_de_apostas.xlsx");
const homeOrAwayNetwork = trainHomeOrAwayNetwork(homeOrAwayData);

testHomeOrAwayNetwork(homeOrAwayNetwork);
