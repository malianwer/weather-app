import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Temperature from "./Temperature";
import Card from "./Card";
import img from "../assets/images/04d.png";

const Hourly = () => {
  return (
    <div>
      <Swiper
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          700: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <Card className="forecast-card">
            <div className="forecast-day">
              {"Tuesday"}, <span>{"3:00 pm"}</span>
            </div>
            <img src={img} alt="" width={100} />
            <div className="forecast-description">overcast clouds</div>
            <div className="minmax-temp">
              <Temperature temperature={"16"} />°
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="forecast-card">
            <div className="forecast-day">
              {"Tuesday"}, <span>{"3:00 pm"}</span>
            </div>
            <img src={img} alt="" width={100} />
            <div className="forecast-description">overcast clouds</div>
            <div className="minmax-temp">
              <Temperature temperature={"16"} />°
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="forecast-card">
            <div className="forecast-day">
              {"Tuesday"}, <span>{"3:00 pm"}</span>
            </div>
            <img src={img} alt="" width={100} />
            <div className="forecast-description">overcast clouds</div>
            <div className="minmax-temp">
              <Temperature temperature={"16"} />°
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="forecast-card">
            <div className="forecast-day">
              {"Tuesday"}, <span>{"3:00 pm"}</span>
            </div>
            <img src={img} alt="" width={100} />
            <div className="forecast-description">overcast clouds</div>
            <div className="minmax-temp">
              <Temperature temperature={"16"} />°
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="forecast-card">
            <div className="forecast-day">
              {"Tuesday"}, <span>{"3:00 pm"}</span>
            </div>
            <img src={img} alt="" width={100} />
            <div className="forecast-description">overcast clouds</div>
            <div className="minmax-temp">
              <Temperature temperature={"16"} />°
            </div>
          </Card>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hourly;
