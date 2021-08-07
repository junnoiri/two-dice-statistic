const generateRandomColor = (data) => {
  const backgroundColorArray = new Array(data.length - 1).fill("");
  const borderColorArray = new Array(data.length - 1).fill("");

  backgroundColorArray.forEach((item, index) => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    backgroundColorArray[index] = `rgba(${r}, ${g}, ${b}, 0.2)`;
    borderColorArray[index] = `rgb(${r}, ${g}, ${b})`;
  });

  return { backgroundColorArray, borderColorArray };
};

export function drawEvenOddChart(data) {
  const ctx = document.getElementById("barChartEvenOdd");
  const { backgroundColorArray, borderColorArray } = generateRandomColor(data);

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Even", "Odd"],
      datasets: [
        {
          label: "# of %",
          data,
          backgroundColor: backgroundColorArray,
          borderColor: borderColorArray,
          borderWidth: 2,
        },
      ],
    },
  });
}

export function drawTotalChart(data) {
  const ctx = document.getElementById("barChartTotal");
  const { backgroundColorArray, borderColorArray } = generateRandomColor(data);

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      datasets: [
        {
          label: "# of %",
          data,
          backgroundColor: backgroundColorArray,
          borderColor: borderColorArray,
          borderWidth: 2,
        },
      ],
    },
  });
}
