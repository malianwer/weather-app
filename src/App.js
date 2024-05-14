import CityInput from "./components/CityInput";
import Weather from "./components/Weather";
import "./App.css";

import Forecast from "./components/Forecast";
import Highlights from "./components/Highlights";
import Hourly from "./components/Hourly";
import Footer from "./components/Footer";

const App = () => {
  const colLeftStyle = {
    background: "#19202d",
    color: "#fff",
  };
  const colRightStyle = {
    background: "#232b39",
    color: "#fff",
  };
  return (
    <section className="container">
      <div className="col-left" style={colLeftStyle}>
        <CityInput />
        <Weather />
      </div>
      <div className="col-right" style={colRightStyle}>
        <div className="top-header">
          <h2 className="heading">Today</h2>
        </div>
        <Hourly />
        <h2 className="heading">Today's Highlights</h2>
        <Highlights />
        <h2 className="heading">This Week</h2>
        <Forecast />
        <Footer />
      </div>
    </section>
  );
};

export default App;
