import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Categorycrowselmen({ bigdeal, head }) {
  return (
    <>
      <h1 className=" text-2xl font-bold  text-left pl-8 pt-12">{head}</h1>
      {
     <div className='w-100% h-aut0  m-auto justify-center pt-14 '>
     <div className='flex flex-wrap justify-center px-1 space-x-8 '>
{bigdeal.map((deal) => (
            <div className=" w-[21%] ">
              
              {
                deal.img.map((imag)=>(
                <img src={imag}  />
                ))
              }
            </div>
          ))}
        </div>
        </div>
      }
    </>
  );
}

export default Categorycrowselmen;
