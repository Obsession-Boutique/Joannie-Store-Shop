import React from "react";
// Slides Import
import Carousel, {
  slidesToShowPlugin,
  autoplayPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const Hero = () => {
  return (
    <Carousel
      plugins={[
        // "arrows",
        "fastSwipe",
        "centered",
        "infinite",
        {
          resolve: autoplayPlugin,
          options: {
            interval: 5000,
          },
        },
        {
          resolve: slidesToShowPlugin,
          options: {
            numberOfSlides: 1,
          },
        },
      ]}
      breakpoints={{
        640: {
          plugins: [
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 1,
              },
            },
            "infinite",
            {
              resolve: autoplayPlugin,
              options: {
                interval: 8000,
              },
            },
          ],
        },
        900: {
          plugins: [
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 1,
              },
            },
            "infinite",
            {
              resolve: autoplayPlugin,
              options: {
                interval: 8000,
              },
            },
          ],
        },
      }}
    >
      <img src="https://i.ibb.co/VWt4z6S/acessories.jpg" width="100%" alt="" />
      <img src="https://i.ibb.co/1ZyR9rH/bano.jpg" width="100%" alt="" />
      <img src="https://i.ibb.co/RTS3V3c/blusas.jpg" width="100%" alt="" />
      <img src="https://i.ibb.co/YWbBhjh/mahones.jpg" width="100%" alt="" />
      <img src="https://i.ibb.co/bFqWjF3/plataforma.jpg" width="100%" alt="" />
      <img src="https://i.ibb.co/ZBR2MVK/sandalias.jpg" width="100%" alt="" />
      <img src="https://i.ibb.co/q7Nvwzc/tennis.jpg" width="100%" alt="" />
    </Carousel>
  );
};

export default Hero;
