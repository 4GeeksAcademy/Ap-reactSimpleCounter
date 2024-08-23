
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
