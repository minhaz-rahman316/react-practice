import React, { Component } from "react";
import { Carousel, Image } from "react-bootstrap";
export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: props.images,
    };
  }
  render() {
    const sliderImages =
      this.state.images &&
      this.state.images.map((image, i) => {
        return (
          <Carousel.Item key={i}>
            <Image
              style={{ width: "100%", height: "300px" }}
              src={image}
              alt={`Slide ${i}`}
              fluid
            />
          </Carousel.Item>
        );
      });
    return <div>{sliderImages}</div>;
  }
}
