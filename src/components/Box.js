import React from "react";
import rock from "../images/rock.png";
import paper from "../images/paper.png";
import scissors from "../images/scissors.png";

const Box = ({ title, shape, result }) => {
  let shapeValue =
    shape === "rock" ? rock : shape === "paper" ? paper : scissors;

  if (title === "Computer") {
    if (result === "" || result == null) {
      result = "";
    } else {
      result = result === "Tie" ? "Tie" : result === "Win" ? "Lose" : "Win";
    }
  }
  return (
    <div
      className={`choice-card ${
        result === "Tie"
          ? "border-primary"
          : result === "Win"
          ? "border-success"
          : "border-danger"
      }`}
    >
      <h1>{title}</h1>
      <img src={shapeValue} />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
