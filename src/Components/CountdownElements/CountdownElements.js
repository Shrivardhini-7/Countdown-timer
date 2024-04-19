import React from "react";
import "./CountdownElements.css";

const CountdownElements = ({ countdownData }) => {
  return (
    <>
      {!(countdownData.message.length > 0) ? (
        <div>
          <div className="countdown-wrapper">
            <div className="box">
              {countdownData.days}
              <span className="text-gray">Days</span>
            </div>
            <div className="box">
              {countdownData.hours}
              <span className="text-gray">Hours</span>
            </div>
            <div className="box">
              {countdownData.minutes}
              <span className="text-gray">Minutes</span>
            </div>
            <div className="box">
              {countdownData.seconds}
              <span className="text-gray">Seconds</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="highlight">{countdownData.message}</div>
      )}
    </>
  );
};

export default CountdownElements;
