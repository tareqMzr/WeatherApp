import { useState } from "react";
import "../Header.css";
function Header() {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [day, setDay] = useState(weekday[new Date().getUTCDay()]);
  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
    setDate(new Date().toLocaleDateString());
    setDay(weekday[new Date().getUTCDay()]);
  }, 1000);
  return (
    <div className="header">
      <p>{time}</p>
      <p>{day}</p>
      <p>{date}</p>
    </div>
  );
}

export default Header;
