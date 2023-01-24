import React from "react";
import CarouselSlider from "react-carousel-slider";

let data = [
  {
    des: "1",
    imgSrc: "./assets/images/slide1.png"
  },
  {
    des: "2",
    imgSrc: "./assets/images/slide2.png"
  },
  {
    des: "3",
    imgSrc: "./assets/images/slide3.png"
  },
  {
    des: "4",
    imgSrc: "./assets/images/slide4.png"
  },
];

let sliderBoxStyle = {
  height: "250px"
  //, width: "200px"
  // , background: "tranparent"
};

let itemsStyle = {
  // ,height: "100%", padding: "0px"
  // , padding: "15px"
  // , background: "#FFCA28"
  // , borderRadius: "4px"
  // , margin: "0px 0px", padding: "0px"
};

let textBoxStyle = {
  // textAlign: "left"
  // ,width:"50%"
  // , background: "transparent"
  // , fontSize: "36px"
  // , fontWeight: 300
};

let buttonSetting = {
  // placeOn: "middle-inside"
  // ,hoverEvent: true,
  // , style: {
  //   left: {
  //     margin: "0px 0px 0px 10px"
  //   },
  //   right: {
  //     margin: "0px 10px 0px 0px"
  //   }
  // }
};

let manner = {
  // autoSliding: {interval: "4s"}
  //, duration: "0.3s"
};

const Slide1 = () => (
  <CarouselSlider
    slideItems={data}
    manner={manner}
    buttonSetting={buttonSetting}
    sliderBoxStyle={sliderBoxStyle}
    itemsStyle={itemsStyle}
    textBoxStyle={textBoxStyle}
  />
);

export default Slide1;
