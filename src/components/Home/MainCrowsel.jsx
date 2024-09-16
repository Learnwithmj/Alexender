
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";



function MainCrowsel({images,wclass}) {
  return (
    <>
    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} interval={4000} showArrows={false} showStatus={false}>
    {
      images.map((image) =>(
        <div  className={`z-10 lg:my-12 my-8 ${wclass} `}>
          <img src={image} />
        </div>
      ))
    }
      </Carousel>
    
    </>
  );
}

export default MainCrowsel;
