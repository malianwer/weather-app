import { FaLocationDot } from "react-icons/fa6";

import Temperature from "./Temperature";
import img from "../assets/images/10d.png";
import { FaCloudversify } from "react-icons/fa";

const Weather = () => {
  return (
    <>
      <div
        className="weather-icon"
        style={{
          background: `url(${img})`,
        }}
      ></div>
      <h2 className="temp">
        <Temperature temperature={"16"} />
        <span>°{"C"}</span>
      </h2>
      <div className="feels-like">
        Feels like <Temperature temperature={"16"} /> °{"C"}
      </div>
      <div className="description">
        <FaCloudversify />
        &nbsp;
        {"Broken Clouds"}
      </div>
      <div className="divider" style={{ background: "#3B435E" }}></div>
      <div className="day">
        {"Tuesday"}, <span>{"12:41 pm"}</span>
      </div>
      <div className="city">
        <FaLocationDot /> {"Lahore"}, {"Pakistan"}
      </div>
    </>
  );
};

export default Weather;
