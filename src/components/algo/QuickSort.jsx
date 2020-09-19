import { generateRandomNumbers } from "../utility/util";

const QuickSort = inputArray => {
  const newArray = [...inputArray];
  let animations = [];

  function quickSort(newArray, start, end) {
    let pivot;
    if (start < end) {
      pivot = partition(newArray, start, end);
      quickSort(newArray, start, pivot - 1);
      quickSort(newArray, pivot + 1, end);
    }
  }

  function partition(newArray, start, end) {
    let pivot = generateRandomNumbers(start, end);

    animations.push(["comparision", pivot, end]);
    animations.push(["swap", pivot, newArray[end]]);
    animations.push(["swap", end, newArray[pivot]]);
    animations.push(["reset", pivot, end]);
    swap(newArray, pivot, end);

    let tail = start;

    for (let i = start; i < end; ++i) {
      animations.push(["comparision", i, end]);
      animations.push(["reset", i, end]);

      if (newArray[i] <= newArray[end]) {
        animations.push(["comparision", i, tail]);
        animations.push(["swap", i, newArray[tail]]);
        animations.push(["swap", tail, newArray[i]]);
        animations.push(["reset", i, tail]);
        swap(newArray, i, tail);
        tail++;
      }
    }

    animations.push(["comparision", tail, end]);
    animations.push(["swap", end, newArray[tail]]);
    animations.push(["swap", tail, newArray[end]]);
    animations.push(["reset", tail, end]);

    swap(newArray, tail, end);
    return tail;
  }

  function swap(newArray, firstIndex, secondIndex) {
    let temp = newArray[firstIndex];
    newArray[firstIndex] = newArray[secondIndex];
    newArray[secondIndex] = temp;
  }

  quickSort(newArray, 0, newArray.length - 1);
  return animations;
};

export default QuickSort;
