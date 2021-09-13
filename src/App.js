import "./App.css";
import React, { useState, useEffect } from "react";
import info from "./data.json";

function App() {
  const [data, setData] = useState([]);
  const [selectedTime, setSelectedTime] = useState("weekly");

  const switchTime = (time) => {
    setSelectedTime(time);
  };

  const options = document.querySelectorAll(".li-item");

  useEffect(() => {
    setData(info);
    const options = document.querySelectorAll(".li-item");
    options.forEach((option) => {
      option.addEventListener("click", function (e) {
        e.preventDefault();
        options.forEach((opt) => {
          opt.classList.remove("active");
        });
        option.classList.add("active");
        switchTime(e.target.textContent.toLowerCase());
      });
    });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="user">
          <div className="top">
            <img
              src="/images/image-jeremy.png"
              alt="user"
              className="user-img"
            />
            <span>Report for</span>
            <h1>Jeremy Robson</h1>
          </div>
          <div className="bottom">
            <ul className="time">
              <li className="li-item">
                <a href="#">Daily</a>
              </li>
              <li className="li-item active">
                <a href="#">Weekly</a>
              </li>
              <li className="li-item">
                <a href="#">Monthly</a>
              </li>
            </ul>
          </div>
        </div>
        {data.map((element) => {
          const { title, timeframes } = element;
          const { daily, weekly, monthly } = timeframes;
          let selected;
          if (selectedTime === "daily") {
            selected = daily;
          } else if (selectedTime === "weekly") {
            selected = weekly;
          } else if (selectedTime === "monthly") {
            selected = monthly;
          }
          return (
            <div className={`work ${title}`}>
              <img
                src={`/images/icon-${title}.svg`}
                alt="work"
                className="icon"
              />
              <div className="content">
                <div className="name">
                  <span>{title}</span>
                  <img
                    src="/images/icon-ellipsis.svg"
                    alt="dots"
                    className="dots"
                  />
                </div>
                <h2 className="total-time">{`${selected.current}hrs`}</h2>
                <span className="last-week">
                  {`Last Week - ${selected.previous}`}hrs
                </span>
              </div>
            </div>
          );
        })}
        {/* <div className="work">
          <img src="/images/icon-work.svg" alt="work" className="icon" />
          <div className="content">
            <div className="name">
              <span>Work</span>
              <img
                src="/images/icon-ellipsis.svg"
                alt="dots"
                className="dots"
              />
            </div>
            <h2 className="total-time">32hrs</h2>
            <span className="last-week">Last Week - 36hrs</span>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
