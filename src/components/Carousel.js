import React from "react";
import Carousel from "react-material-ui-carousel";
import slides from "../CarLogos.json";
import Item from "./CarItems";
function SkillsCar() {
  return (
    <Carousel>
      {slides.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
}

export default SkillsCar;
