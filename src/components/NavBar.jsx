import React, { useEffect, useState } from "react";
import { generateNewInput } from "./utility/util";
import styles from "./NavBar.module.css";

const NavBar = props => {
  const [inputRange, setInputRange] = useState(50);
  const [disabled, setDisabled] = useState(false);
  const [speed, setSpeed] = useState(798.5);
  const { setInputArray, sort } = props;

  const handleInputRange = e => {
    setInputRange(e.target.value);
  };

  const shuffle = () => {
    const t = generateNewInput(inputRange);
    setInputArray(t);
  };

  useEffect(() => {
    shuffle();
  }, [inputRange]);

  const trigger = name => {
    setDisabled(true);
    sort(name, 800 - speed, setDisabled);
  };

  const style = disabled ? styles.disabled : styles.button;

  return (
    <div className={styles.NavBar}>
      <h2 className={styles.text}>Sorting Visualizer</h2>
      <div className={styles.heading}>
        <button className={style} onClick={shuffle}>
          Shuffle
        </button>

        <div className={styles.input}>
          <label className={styles.s} htmlFor="range">
            Array size
          </label>
          <input
            className={styles.s}
            id="range"
            disabled={disabled}
            type="range"
            min="10"
            max="250"
            value={inputRange}
            step="10"
            onChange={handleInputRange}
          />
          <label className={styles.s} htmlFor="speed">
            Speed
          </label>
          <input
            className={styles.s}
            id="speed"
            type="range"
            min="600"
            max="900"
            step="100"
            value={speed}
            disabled={disabled}
            onChange={e => setSpeed(e.target.value)}
          />
        </div>
      </div>
      <nav className={styles.navigation}>
        <button className={style} onClick={() => trigger("ble")}>
          Bubble Sort
        </button>
        <button className={style} onClick={() => trigger("ins")}>
          Insertion Sort
        </button>
        <button className={style} onClick={() => trigger("slt")}>
          Selection Sort
        </button>
        <button className={style} onClick={() => trigger("qk")}>
          Quick Sort
        </button>
        <button className={style} onClick={() => trigger("mrg")}>
          Merge Sort
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
