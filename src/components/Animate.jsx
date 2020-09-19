export const animate = function (ani, divs, speed, setDisabled) {
  for (var i = 0; i < ani.length; i++) {
    const [str] = ani[i];

    if (str === "comparision" || str === "reset") {
      const [, idx1, idx2] = ani[i];

      let color;
      if (str === "comparision") color = "darkorange";
      else if (str === "reset") color = "lightgreen";

      setTimeout(() => {
        divs[idx1].style.backgroundColor = color;
        divs[idx2].style.backgroundColor = color;
      }, i * speed);
    } else {
      const [, idx, heights] = ani[i];
      setTimeout(() => {
        divs[idx].style.height = `${heights}px`;
      }, i * speed);
    }
  }

  const resetColor = () => {
    for (let i = 0; i < divs.length; i++) {
      setTimeout(() => {
        divs[i].style.backgroundColor = "pink";
      }, i * 7);
    }

    setTimeout(() => setDisabled(false), 1000);
  };

  setTimeout(resetColor, (speed * ani.length) / 2 + i);
};
