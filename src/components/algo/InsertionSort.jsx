const InsertionSort = inputArray => {
  const newArray = [...inputArray];
  let animations = [];

  for (let i = 1; i < newArray.length; i++) {
    let j = i - 1;

    //check (change color)
    animations.push(["comparision", i, j]);
    //reset back to same color if no swap occurs
    animations.push(["reset", i, j]);

    if (newArray[j] > newArray[i]) {
      animations.push(["swap", i, newArray[j]]);
      animations.push(["swap", j, newArray[i]]);

      const t = newArray[j];
      newArray[j] = newArray[i];
      newArray[i] = t;

      while (j > 0) {
        animations.push(["comparision", j, j - 1]);

        animations.push(["reset", j, j - 1]);

        if (newArray[j] < newArray[j - 1]) {
          animations.push(["swap", j, newArray[j - 1]]);
          animations.push(["swap", j - 1, newArray[j]]);

          const t = newArray[j];
          newArray[j] = newArray[j - 1];
          newArray[j - 1] = t;
        } else break;
        j--;
      }
    }
  }
  return animations;
};

export default InsertionSort;
