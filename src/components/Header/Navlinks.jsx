import { useState} from "react";
import { NavLink } from "react-router-dom";
import MenMegamenu from "./MenMegamenu";
import WomenMegamenu from "./WomenMegamenu";
import KidsMegamenu from "./KidsMegamenu";
import LivingMegamenu from "./LivingMegamenu";
import BeautyMegamenu from "./BeautyMegamenu";
import Sample from "./Sample";

function Navlinks() {
  const [isShown, setIsShown] = useState(false);
  const [isWomenShown, setIsWomenShown] = useState(false);
  const [isKidsShown, setIsKidsShown] = useState(false);
  const [isLivingShown, setIsLivingShown] = useState(false);
  const [isBeautyShown, setIsBeautyShown] = useState(false);
  // const [isSidemenuShown, setIsSidemenuShown] = useState(false);

  return (
    <>
          
          <div className=" lg:w-[40%] lg:flex xl:flex">
            <div className=" pt-8 text-slate-600 flex w-[100%] text-center ">
              <div
                className="w-[10%]  h-[100%] mb-0 font-bold text-[13px] hover:border-b-orange-600 hover:border-b-4 z-20"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
              >
                <NavLink to="/men">MEN</NavLink>

                {isShown && (
                  <>
                    <div className="mx-auto items-center bg-transparent -ml-9 mt-7 ">
                      <MenMegamenu />
                      {/* <Sample/> */}
                    
                    </div>
                  </>
                )}
              </div>
              <div
                className="w-[15%]  h-[100%] mb-0 font-bold text-[13px] hover:border-b-fuchsia-400 hover:border-b-4 z-20"
                onMouseEnter={() => setIsWomenShown(true)}
                onMouseLeave={() => setIsWomenShown(false)}
              >
                <NavLink to="/women">WOMEN</NavLink>

                {isWomenShown && (
                  <>
                    <div className="mx-auto items-center bg-transparent -ml-[88px] mt-7 ">
                      <WomenMegamenu />
                    </div>
                  </>
                )}
              </div>
              <div
                className="w-[12%] h-[100%] mb-0 font-bold text-[13px] hover:border-b-orange-600 hover:border-b-4 z-20"
                onMouseEnter={() => setIsKidsShown(true)}
                onMouseLeave={() => setIsKidsShown(false)}
              >
                <NavLink to="/kids">KIDS</NavLink>

                {isKidsShown && (
                  <>
                    <div className="mx-auto items-center bg-transparent -ml-[150px] mt-7">
                      <KidsMegamenu />
                    </div>
                  </>
                )}
              </div>
              <div
                className=" w-[30%] h-[100%] mb-0 font-bold text-[13px] hover:border-b-orange-300 hover:border-b-4 z-20"
                onMouseEnter={() => setIsLivingShown(true)}
                onMouseLeave={() => setIsLivingShown(false)}
              >
                <NavLink to="/living">HOME & LIVING</NavLink>

                {isLivingShown && (
                  <>
                    <div className="mx-auto items-center bg-transparent -ml-[245px] mt-7">
                      <LivingMegamenu />
                    </div>
                  </>
                )}
              </div>
              <div
                className=" w-[15%] h-[100%] mb-0 font-bold text-[13px] hover:border-b-cyan-600 hover:border-b-4 z-20"
                onMouseEnter={() => setIsBeautyShown(true)}
                onMouseLeave={() => setIsBeautyShown(false)}
              >
                <NavLink to="/">BEAUTY</NavLink>

                {isBeautyShown && (
                  <>
                    <div className="mx-auto items-center bg-transparent -ml-[400px] mt-7">
                      <BeautyMegamenu />
                    </div>
                  </>
                )}
              </div>

              <div className="w-[15%]  h-[100%] mb-0 font-bold text-[13px] hover:border-b-orange-600 hover:border-b-4 z-20">
                <NavLink to="/studio">STUDIO</NavLink>
              </div>
            </div>
          </div>
      
    </>
  );
}

export default Navlinks;
