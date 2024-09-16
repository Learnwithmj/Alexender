import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menu } from "../../database";
import { BsChevronRight } from "react-icons/bs";

function Sidenavlinks() {
  const [heading, setHeading] = useState(" ");
  const [subheading, setSubHeading] = useState(" ");
  return (
    <>
      {menu.map((hlink) => (
        <div className=" cursor-pointer overflow-auto ">
          <div className="text-black font-semibold pl-5 px-4 py-4 text-[15px]  ">
            <h1 className="flex flex-row">
              <Link to={hlink.link}>{hlink.name}</Link>
              {hlink.submenu && (
                <BsChevronRight
                  className=" items-center mt-[6px] ml-auto"
                  onClick={() =>
                    heading !== hlink.name
                      ? setHeading(hlink.name)
                      : setHeading("")
                  }
                />
              )}
            </h1>
            {hlink.submenu && (
              <div
                className={`text-md ${
                  heading === hlink.name ? "lg:hidden" : "hidden"
                }`}
              >
                {hlink.sublink.map((slink) => (
                  <div className=" list-none  pl-6 font-normal px-4 py-3 text-[14px]">
                    <li
                      className="flex flex-row pt-1"
                      onClick={() =>
                        subheading !== slink.Head
                          ? setSubHeading(slink.Head)
                          : setSubHeading("")
                      }
                    >
                      {slink.Head}
                      {slink.mysubmenu && (
                        <BsChevronRight
                          className=" items-center mt-[6px] ml-auto"
                          onClick={() =>
                            subheading !== slink.Head
                              ? setSubHeading(hlink.Head)
                              : setSubHeading("")
                          }
                        />
                      )}
                    </li>

                    {slink.sublinks && (
                      <div
                        className={` pl-6 font-normal p-2 text-[14px] ${
                          subheading === slink.Head ? "lg:hidden" : "hidden"
                        }`}
                      >
                        {slink.sublinks.map((mysublinks) => (
                          <li className="pt-4">{mysublinks.name}</li>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
      <hr />
    </>
  );
}

export default Sidenavlinks;
