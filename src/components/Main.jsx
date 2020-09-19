import React, { useState } from "react";
import NavBar from "./NavBar";
import styles from "./Main.module.css";
import BubbleSort from "./algo/BubbleSort";
import SelectionSort from "./algo/SelectionSort";
import InsertionSort from "./algo/InsertionSort";
import MergeSort from "./algo/MergeSort";
import QuickSort from "./algo/QuickSort";
import { animate } from "./Animate";

const Main = () => {
  const [inputArray, setInputArray] = useState([]);

  const divs = [];

  const sort = (val, speed, setDisabled) => {
    let animations = [];

    switch (val) {
      case "ble":
        animations = BubbleSort(inputArray);
        animate(animations, divs, speed, setDisabled);
        break;
      case "ins":
        animations = InsertionSort(inputArray);
        animate(animations, divs, speed, setDisabled);
        break;
      case "slt":
        animations = SelectionSort(inputArray);
        animate(animations, divs, speed, setDisabled);
        break;
      case "qk":
        animations = QuickSort(inputArray);
        animate(animations, divs, speed, setDisabled);
        break;
      case "mrg":
        animations = MergeSort(inputArray);
        animate(animations, divs, speed, setDisabled);
        break;
    }
  };

  return (
    <div className={styles.Main}>
      <NavBar setInputArray={setInputArray} sort={sort} />

      <div className={styles.Main__container}>
        {inputArray.map((val, idx) => (
          <div
            className={styles.inputArray}
            ref={el => divs.push(el)}
            style={{
              height: `${val}px`,
              width: `${(100 / inputArray.length) * 7}px`,
            }}
            key={idx}></div>
        ))}
      </div>
    </div>
  );
};

export default Main;
