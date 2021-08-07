import { drawEvenOddChart, drawTotalChart } from "./chart.js";

const runButton = document.querySelector("#run-button");
const setNumberRounds = document.querySelector(".set-number");
const diceLeft = document.querySelector(".box-left");
const diceRight = document.querySelector(".box-right");

const rollDice = () => Math.floor(Math.random() * 6 + 1);

runButton.addEventListener("pointerup", (e) => {
  const totalArray = new Array(11).fill(0);

  if (!setNumberRounds.value) setNumberRounds.value = 1;

  let even = 0;
  let odd = 0;
  for (let i = 0; i < setNumberRounds.value; i++) {
    const randomValueOne = rollDice();
    const randomValueTwo = rollDice();
    const total = randomValueOne + randomValueTwo;
    totalArray[total - 2]++;

    if (total % 2 === 0) even++;
    if (total % 2 !== 0) odd++;

    diceLeft.innerText = randomValueOne;
    diceRight.innerText = randomValueTwo;
  }

  drawEvenOddChart([
    Math.round((even / setNumberRounds.value) * 10000) / 100,
    Math.round((odd / setNumberRounds.value) * 10000) / 100,
    0,
  ]);

  totalArray.forEach((item, index) => {
    totalArray[index] =
      Math.round((item / setNumberRounds.value) * 10000) / 100; //round to 2 nearest decimal place
  });
  drawTotalChart([...totalArray, 0]);
});
