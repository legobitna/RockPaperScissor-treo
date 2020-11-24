import logo from "./logo.svg";
import "./App.css";
import Box from "./components/Box";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

let items = ["rock", "paper", "scissors"];
function App() {
  let [computerChoice, setComputerChoice] = useState("");
  let [userChoice, setUserChoice] = useState("");
  let [result, setResult] = useState("");
  let playGame = () => {
    // get the random item (rock paper or sissors)
    let userRandomNum = Math.floor(Math.random() * 3);
    console.log("user random number", userRandomNum);
    console.log("item that user chose", items[userRandomNum]);
    setUserChoice(items[userRandomNum]);

    let computerRandomNum = Math.floor(Math.random() * 3);
    console.log("computer random number", computerRandomNum);
    console.log("item that computer chose", items[computerRandomNum]);
    setComputerChoice(items[computerRandomNum]);

    // figure who is the winner
    judge(items[userRandomNum], items[computerRandomNum]);
  };

  let judge = (user, computer) => {
    let result = "";
    if (user === computer) {
      result = "Tie";
    } else if (user === "rock") {
      if (computer === "scissors") {
        result = "Win";
      } else {
        result = "Lose";
      }
    } else if (user === "paper") {
      if (computer === "rock") {
        result = "Win";
      } else {
        result = "Lose";
      }
    } else if (user === "scissors") {
      if (computer === "paper") {
        result = "Win";
      } else {
        result = "Lose";
      }
    }

    setResult(result);
  };
  return (
    <div>
      <h1>Rock paper Scissors</h1>
      <Box title="You" shape={userChoice} result={result} />
      <Box title="Computer" shape={computerChoice} result={result} />
      <button onClick={playGame}>start</button>
    </div>
  );
}

export default App;
