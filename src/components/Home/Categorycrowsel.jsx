
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";



function Categorycrowsel({categories, head}) {
  return (
    <>
        <h1 className=" text-2xl font-bold  text-left pl-8 pt-12">{head}</h1>
    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} interval={4000} showArrows={false} showStatus={false}>
    {
      categories.map((category) =>(
        
        <div  className=" z-10 lg:my-12 my-8 m-auto block  w-full">
        
           <div className="flex w-[16.4%] gap-2  pt-8 ">

          
          {
              category.img.map((brands)=>(
                  
                  <img src= {brands} />
                  
                ))
            }
            </div>
            
        </div>
      ))
    }
      </Carousel>
    
    </>
  );
}

export default Categorycrowsel;
