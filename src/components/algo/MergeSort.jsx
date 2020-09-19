const MergeSort = inputArray => {
  let newArray = [...inputArray];
  let animations = [];

  function mergesort(arr, start, end) {
    if (start < end) {
      const middle = Math.floor((start + end) / 2);
      mergesort(arr, start, middle);
      mergesort(arr, middle + 1, end);

      merge(arr, start, middle, end);
    }
  }

  function merge(arr, start, middle, end) {
    let i = start,
      j = middle + 1;
    let result = [];

    while (i <= middle && j <= end) {
      //check (change color)
      animations.push(["comparision", i, j]);
      //reset back to same color if no swap occurs
      animations.push(["reset", i, j]);

      if (arr[i] < arr[j]) result.push(arr[i++]);
      else result.push(arr[j++]);
    }

    for (; i <= middle; i++) {
      //check (change color)
      animations.push(["comparision", i, i]);
      //reset back to same color if no swap occurs
      animations.push(["reset", i, i]);
      result.push(arr[i]);
    }
    for (; j <= end; j++) {
      //check (change color)
      animations.push(["comparision", j, j]);
      //reset back to same color if no swap occurs
      animations.push(["reset", j, j]);
      result.push(arr[j]);
    }

    for (let k = start, j = 0; k <= end; k++, j++) {
      animations.push(["comparision", k, j]);
      animations.push(["replace ", k, result[j]]);
      animations.push(["comparision", k, j]);
      arr[k] = result[j];
    }
  }

  mergesort(newArray, 0, newArray.length - 1);
  return animations;
};

export default MergeSort;
