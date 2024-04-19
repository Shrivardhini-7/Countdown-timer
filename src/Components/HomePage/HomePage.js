import React, { useState, useEffect } from "react";
import "./HomePage.css";
import DateInput from "../DateInput/DateInput";
import CountdownElements from "../CountdownElements/CountdownElements";

let HomePage = () => {
  let [isTimerOn, setIsTimerOn] = useState(false);
  let [data, setData] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    message: "",
  });
  const [intervalId, setIntervalId] = useState(null);

  let startCountDown = (inputDateTime) => {
    clearInterval(intervalId);
    let interval = setInterval(() => {
      let currentDate = new Date();
      let inputDate = new Date(inputDateTime);

      if (inputDate > currentDate) {
        let difference = inputDate - currentDate;
        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        if (days <= 99 && hours <= 23 && minutes <= 59 && seconds <= 59) {
          setIsTimerOn(true);
          setData({ days, hours, minutes, seconds, message: "" });
        } else {
          setData({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            message: "Selected time is more than 100 days",
          });
        }
      } else {
        setIsTimerOn(false);
        if (inputDate < currentDate) {
          setData({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            message: "Selected time is from the past",
          });
        } else {
          setData({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            message:
              "🎉 The countdown is over! What's next on your adventure? 🎉",
          });
        }
        clearInterval(interval);
      }
    }, 1000);
    setIntervalId(interval);
  };

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  let handleDateSelect = (date) => {
    startCountDown(date);
  };

  let cancelTimer = () => {
    clearInterval(intervalId);
    setIsTimerOn(false);
    setData({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      message: "",
    });
    window.location.reload();
  };

  return (
    <div>
      <div className="home-page-container">
        <h1 className="text-white">
          Countdown<span className="text-color"> Timer</span>
        </h1>
        <DateInput
          onDateSelection={handleDateSelect}
          isTimerOn={isTimerOn}
          onCancel={cancelTimer}
        ></DateInput>
        <CountdownElements countdownData={data}></CountdownElements>
      </div>
    </div>
  );
};

export default HomePage;
