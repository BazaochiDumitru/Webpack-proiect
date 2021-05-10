import "./style.css";
console.log("Hello webpack!");

document.body.style.backgroundColor = "#3EEDDF";

document.addEventListener("DOMContentLoaded", () => { 
  console.log("DOM loaded"); 
  const buttonElement = document.getElementById("btn"); 
  buttonElement.addEventListener("click", () => { 
  document.body.style.backgroundColor = "Orange"; 
  }); 
});

const fancyFunc = () => {
  return [1, 2];
};

const [a, b] = fancyFunc();

import { getUsers } from "./common/usersAPI";
console.log("Hello Dumitru!");

getUsers().then(json => console.log(json));