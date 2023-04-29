import React, { useState } from "react";
import "./styles.css";
import Slider from "react-slick";
import { useEffect } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typography from "@mui/material/Typography";

const rows = [];
const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];
function createData(day, breakfast, lunch, dinner) {
  return { day, breakfast, lunch, dinner };
}

const Carousel = () => {
  const [meal, setFinalMenu] = useState("");
  // const PrevButton = (props) => (

  //   <button className="prev-button" onClick={props.onClick}>
  //     Previous
  //   </button>
  // );

  // const NextButton = (props) => (
  //   <button className="next-button" onClick={props.onClick}>
  //     Next
  //   </button>
  // );

  useEffect(() => {
    axios.get("http://localhost:8000/menu/").then((res) => {
      console.log(res);
      var data = new Array();
      for (let i = 0; i < 7; i++) {
        data[i] = new Array();
      }
      // menu.forEach((item, index) => {
      //   console.log(item, index);
      //   data[parseInt(item.day)][parseInt(item.time)] = item.meal;
      // });
      for (let i = 0; i < 21; i++) {
        if (
          res.data[i] &&
          res.data[i].day &&
          res.data[i].time &&
          res.data[i].meal
        )
          data[parseInt(res.data[i].day)][parseInt(res.data[i].time)] =
            res.data[i].meal;
      }

      data.forEach((d, index) => {
        if (rows.length !== 7) {
          rows.push(createData(days[index].toUpperCase(), d[0], d[1], d[2]));
        }
      });

      console.log("setted finall menu", rows);
      // rows.forEach((row) => {
      //   console.log(row);
      // });
      setFinalMenu(data);
    });
  }, []);

  const menu = [
    {
      id: 1,
      src: "images/food.jpg",
      alt: "Image 1",
      meal: "Breakfast",
      description: ["Poha", "Bread", "Sprouts"],
    },
    {
      id: 2,
      src: "images/food.jpg",
      alt: "Image 2",
      meal: "Lunch",
      description: ["Chola Puri", "Rice", "Chapati"],
    },
    {
      id: 3,
      src: "images/food.jpg",
      alt: "Image 3",
      meal: "Dinner",
      description: ["Shahi Paneer", "Biryani", "Chapati", "Gulab Jamun"],
    },
  ];

  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    lazyLoad: false,
    autoplay: true,
    autoplaySpeed: 4000,
    // prevArrow: <PrevButton />,
    // nextArrow: <NextButton />,
    // customPaging: (i) => <div>{i + 1}</div>,

    // width:"100px"
  };
  // const handlePrevClick = () => {
  //   this.slider.slickPrev();
  // }

  // const handleNextClick = () => {
  //   this.slider.slickNext();
  // }

  return (
    <div className="imgSlider ">
      <Slider {...settings}>
        {rows.map((item) => (
          <div className="imgContent ">
            <div className="menu ">
              <Typography
                sx={{
                  fontFamily: "'Architects Daughter', cursive",
                  fontSize: "48px",
                  wordWrap: "break-word",
                }}
              >
                {" "}
                {item.day}
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "#471909",
                  fontWeight: "800",
                  wordWrap: "break-word",
                }}
              >
                BreakFast:
                {item.breakfast}
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "#471909",
                  fontWeight: "800",
                  wordWrap: "break-word",
                }}
              >
                Lunch:
                {item.lunch}
              </Typography>

              <Typography
                sx={{
                  fontSize: "20px",
                  color: "#471909",
                  fontWeight: "800",
                }}
              >
                Dinner:
                {item.dinner}
              </Typography>
            </div>

            <img src="images/food.jpg" style={{ opacity: "0.3" }} alt="food" />
          </div>
        ))}
      </Slider>

      {/* <div className="slider-buttons">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div> */}
    </div>
  );
};

export default Carousel;
