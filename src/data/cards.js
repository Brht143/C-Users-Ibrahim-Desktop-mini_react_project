import pokemon1 from "../images/pokemon1.png";
import pokemon2 from "../images/pokemon2.png";
import pokemon3 from "../images/pokemon3.jpg";
import pokemon4 from "../images/pokemon4.png";
import pokemon5 from "../images/pokemon5.jpeg";
import pokemon6 from "../images/pokemon6.jpg";
import pokemon7 from "../images/pokemon7.avif";
import pokemon8 from "../images/pokemon8.webp";
import pokemon9 from "../images/pokemon9.jpg";
import pokemon10 from "../images/pokemon10.png";
import pokemon11 from "../images/pokemon11.png";
import pokemon12 from "../images/pokemon12.png";
import pokemon13 from "../images/pokemon13.png";
import pokemon14 from "../images/pokemon14.png";
import pokemon15 from "../images/pokemon15.jpg";
import pokemon16 from "../images/pokemon16.png";
import pokemon17 from "../images/pokemon17.png";
import pokemon18 from "../images/pokemon18.jpg";
import pokemon19 from '../images/pokemon19.webp';
import pokemon20 from '../images/pokemon20.webp';
import pokemon21 from '../images/pokemon21.webp';


let pokemons = [
  { ref: 1, className: "card", image: pokemon1 },
  { ref: 2, className: "card", image: pokemon2 },
  { ref: 3, className: "card", image: pokemon3 },
  { ref: 4, className: "card", image: pokemon4 },
  { ref: 5, className: "card", image: pokemon5 },
  { ref: 6, className: "card", image: pokemon6 },
  { ref: 7, className: "card", image: pokemon7 },
  { ref: 8, className: "card", image: pokemon8 },
  { ref: 9, className: "card", image: pokemon9 },
  { ref: 10, className: "card", image: pokemon10 },
  { ref: 11, className: "card", image: pokemon11 },
  { ref: 12, className: "card", image: pokemon12 },
  { ref: 13, className: "card", image: pokemon13 },
  { ref: 14, className: "card", image: pokemon14 },
  { ref: 15, className: "card", image: pokemon15 },
  { ref: 16, className: "card", image: pokemon16 },
  { ref: 17, className: "card", image: pokemon17 },
  { ref: 18, className: "card", image: pokemon18 },
  { ref: 19, className: "card", image: pokemon19 },
  { ref: 20, className: "card", image: pokemon20 },
  { ref: 21, className: "card", image: pokemon21 }
];

// Math.random to return float number between 0 and 1 // example 0.73
// Math.floor to return int number instead of Float // example 2.97 => 2

const getRandomInt = (num) => Math.floor(Math.random() * num);

let randomIndex = 0;
let randomArr = [];

while (randomIndex < 8) {
  let randomNumber = getRandomInt(pokemons.length);
  if (randomArr.includes(randomNumber)) continue;
  else {
    randomArr.push(randomNumber);
    randomIndex++;
  }
}

const sortRandom = (a, b) => 0.5 - Math.random();

let eightCards = pokemons.filter((card, index) => randomArr.includes(index));

let pokemonsCards = [...eightCards, ...eightCards]
  .sort(sortRandom)
  .map((card, index) => Object.assign({ index: index }, card));

export default pokemonsCards;
