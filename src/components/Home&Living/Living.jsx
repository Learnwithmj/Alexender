import React from "react";
import Header from "../Header/Header";
import topbanner from "../../assets/img/Home and Living/topbanner.jpg";
import { living, livingmenu,gettrend} from "../../database";
import { Link } from "react-router-dom";
import trendbanner from "../../assets/img/Home and Living/trendbanner.jpg"


function Living() {
  return (
    <>
      <Header />
      <div className="pt-6 px-16">
        <img src={topbanner} alt="topbanner" />
      </div>
      
        <div className=" pl-16  flex">
          <div className="w-[69%]">
            <h1 className=" text-[27px] py-[52px] font-bold tracking-widest pl-10">
              NICE TO SEE YOU, COME ON IN!
            </h1>
            
              <div className="flex flex-wrap gap-2 ">
                {living.map((furnitures) => (
                  <div className=" w-[49.5%] overflow-hidden inline-block">
                    <img
                      src={furnitures}
                      className=" transform transition-transform duration-300  hover:scale-105 "
                    />
                  </div>
                ))}
              </div>
            
          </div>
          <div className=" w-[31%]">
            <div className="pl-14">

              {livingmenu.map((lgmenu)=>(
                <ul className=" text-[14px] font-sans py-2">
                  <Link to={lgmenu.link}>{lgmenu.name}</Link>
                  {lgmenu.submenu && (
                    <div className="py-3 ">
                      {lgmenu.sublink.map((lgslink)=>(
                        <ul className="hover:underline cursor-pointer">{lgslink.name}</ul>
                      ))}
                    </div>
                  )}
                  </ul>
                
                
              
))}
              </div>
          </div>
        </div>
      
      <div className="my-16 px-16 bg-zinc-100 pb-16">
        <div><img src={trendbanner} /></div>
        <div className="flex ">
          {gettrend.map((trends)=>(
            <div className="w-25% overflow-hidden inline-block gap-2">
              <img src={trends}
              className="transform transition-transform duration-300 hover:scale-105 w-25%" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Living;
