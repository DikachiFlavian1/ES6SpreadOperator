import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));
const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["Apple", "Banana", "Coconut", ...citrus];

const fullName = {
  fName: "James",
  lName: "Bond",
};

const user = {
  ...fullName,
  id: 1,
  username: "jamesbond007",
};
console.log(fruits);
