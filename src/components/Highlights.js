import React from "react";
import Card from "./Card";

import humidity from "../assets/images/humidity.png";
import wind from "../assets/images/wind-day.png";
import sunrise from "../assets/images/sunrise.png";
import sunset from "../assets/images/sunset.png";
import clouds from "../assets/images/clouds.png";
import uv from "../assets/images/uv.png";
import pressure from "../assets/images/pressure.png";

const Highlights = () => {
  return (
    <>
      <div className="highlight-container">
        <Card className="h-card">
          <div className="h-title">Humidity</div>
          <img src={humidity} width={100} alt="humidity" />
          <div className="hl-value">
            <h1>{"78"}</h1>
            <span>%</span>
          </div>
        </Card>
        <Card className="h-card">
          <div className="h-title">Wind Speed</div>
          <img src={wind} width={100} alt="wind icon" />
          <div className="hl-value">
            <h1>{"3.6"}</h1>
            <span>m/s</span>
          </div>
        </Card>
        <Card className="h-card sun">
          <div className="sun-info">
            <img src={sunrise} width={50} alt="sunrise" />
            <div>
              {"5:09 am"}
              <span>Sunrise</span>
            </div>
          </div>
          <div className="sun-info">
            <img src={sunset} width={50} alt="sunset" />
            <div>
              {"8:44 pm"}
              <span>Sunset</span>
            </div>
          </div>
        </Card>
        <Card className="h-card">
          <div className="h-title">Clouds</div>
          <img src={clouds} width={100} alt="clouds" />

          <div className="hl-value">
            <h1> {"75"}</h1>
            <span>%</span>
          </div>
        </Card>
        <Card className="h-card">
          <div className="h-title">UV Index</div>
          <img src={uv} width={100} alt="uv" />
          <h1>{"1.87"}</h1>
        </Card>
        <Card className="h-card">
          <div className="h-title">Pressure</div>
          <img src={pressure} width={100} alt="pressure" />

          <div className="hl-value">
            <h1>{"1000"}</h1>
            <span>hPa</span>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Highlights;
