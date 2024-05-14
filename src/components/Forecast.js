import React from "react";
import Card from "./Card";
import Temperature from "./Temperature";
import img from "../assets/images/10d.png";

const Forecast = () => {
  return (
    <div className="forecast-container">
      <Card className="forecast-card">
        <div className="forecast-day">{"Tuesday"}</div>
        <img src={img} alt="icon" width={100} />
        <div className="forecast-description">{"moderate rain"}</div>
        <div className="minmax-temp">
          <Temperature temperature={"16"} />°
          <span>
            <Temperature temperature={"13"} />°
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Forecast;
