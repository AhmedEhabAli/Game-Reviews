import { games } from "./game.js";
import { details } from "./details.js";
import { ui } from "./ui.js";
const detailsGameElement = document.querySelector(".detailsGame");
const myUi = new ui(detailsGameElement);
const myGames = new games(myUi);
const myDetails = new details(myUi);
