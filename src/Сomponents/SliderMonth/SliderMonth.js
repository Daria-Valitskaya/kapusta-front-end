import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import "./SliderMonth.css";

SwiperCore.use([Navigation]);
const arrayMonthData = [
  {
    month: "Январь 2019",
    sum: 10000.0,
  },
  {
    month: "Февраль 2019",
    sum: 25000.0,
  },
  {
    month: "Март 2019",
    sum: 26000.0,
  },
  {
    month: "Апрель 2019",
    sum: 30000.0,
  },
  {
    month: "Май 2019",
    sum: 30900.0,
  },
  {
    month: "Июнь 2019",
    sum: 17800.0,
  },
  {
    month: "Июль 2019",
    sum: 43000.0,
  },
  {
    month: "Август 2019",
    sum: 30450.0,
  },
  {
    month: "Сентябрь 2019",
    sum: 25070.0,
  },
  {
    month: "Октябрь 2019",
    sum: 10280.0,
  },
  {
    month: "Ноябрь 2019",
    sum: 37000.0,
  },
  {
    month: "Декабрь 2019",
    sum: 31090.0,
  },
];

export default function SliderMonth() {
  return (
    <div className="fieldSlider">
      <Swiper
        navigation={true}
        spaceBetween={1}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {arrayMonthData.map((item) => (
          <SwiperSlide key={item.month}>
            <span className="monthText">{item.month}</span>{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
