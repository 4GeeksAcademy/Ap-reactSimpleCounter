import React from "react";
import ReactDOM from "react-dom/client";
import SecondsCounter from "./SecondsCounter";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS

const root = ReactDOM.createRoot(document.getElementById("root"));

let seconds = 0;

const updateCounter = () => {
  root.render(<SecondsCounter seconds={seconds} />);
  seconds += 1;
};

setInterval(updateCounter, 1000);
