import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import { useSelector } from "react-redux";

interface IState {
  counter: {
    count: number;
  };
}

function App() {
  const count = useSelector((state: IState) => state.counter.count);
  const voters = [
    "Anthony Sistilli ",
    "Bob Smith",
    "Stephanie Foo",
    "Kevin Ma",
  ];

  return (
    <div className="App">
      <h1>Redux ducks counter</h1>
      <h2> Total Votes: {count}</h2>
      {voters.map((name) => (
        <Counter name={name} />
      ))}
    </div>
  );
}

export default App;
