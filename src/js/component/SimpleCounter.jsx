//function SimpleCounter(props){
  // return (<div className="bigCounter">

   // <div className="calendar">
   //    <i className="fa-solid fa-paint-roller"></i>
   // </div>
   // <div className="four"></div>
  //  <div className="three"></div>
  //  <div className="two"></div>
  //  <div className="one"></div>

  //  </div>);
//}
import React from "react";
import './SecondsCounter.css';

const SecondsCounter = ({ seconds }) => {
  const formatTime = (time) => {
    const timeString = time.toString().padStart(6, "0"); // Ensure 6 digits
    return timeString.split("");
  };

  return (
    <div className="seconds-counter">
      <div className="timer-icon">
        <i className="fas fa-clock"></i>
      </div>
      {formatTime(seconds).map((digit, index) => (
        <div key={index} className="timer-digit">
          {digit}
        </div>
      ))}
    </div>
  );
};

export default SecondsCounter;
