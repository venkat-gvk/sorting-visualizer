const SelectionSort = inputArray => {
  const newArray = [...inputArray];
  const animations = [];

  for (let i = 0; i < newArray.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < newArray.length; j++) {
      //check (change color)
      animations.push(["comparision", min, j]);
      //reset back to same color if no swap occurs
      animations.push(["reset", min, j]);

      if (newArray[min] > newArray[j]) min = j;
    }

    animations.push(["swap", i, newArray[min]]);
    animations.push(["swap", min, newArray[i]]);

    let t = newArray[min];
    newArray[min] = newArray[i];
    newArray[i] = t;
  }

  return animations;
};

export default SelectionSort;
