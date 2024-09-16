import React from "react";
import { Link } from "react-router-dom";
import { menus } from "../../database";

function Sidefooter() {
  return (
    <>
      {menus.map((flink) => (
        <div className=" cursor-pointer ">
          <p className="text-black pl-5 p-4 text-[14px]">
            <Link to={flink.link}>{flink.name}</Link>
          </p>
        </div>
      ))}
    </>
  );
}

export default Sidefooter;
