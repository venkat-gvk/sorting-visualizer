const BubbleSort = inputArray => {
  const newArray = [...inputArray];
  let animations = [];

  for (let i = 0; i < newArray.length; i++) {
    for (var j = 0; j < newArray.length - i - 1; j++) {
      //check (change color)
      animations.push(["comparision", j, j + 1]);
      //reset back to same color if no swap occurs
      animations.push(["reset", j, j + 1]);

      if (newArray[j] > newArray[j + 1]) {
        animations.push(["swap", j, newArray[j + 1]]);
        animations.push(["swap", j + 1, newArray[j]]);

        const t = newArray[j];
        newArray[j] = newArray[j + 1];
        newArray[j + 1] = t;
      }
    }
  }
  return animations;
};

export default BubbleSort;
