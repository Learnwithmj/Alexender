import React, { useState, useTransition } from "react";
import logo from "../../assets/img/Logo.png";
import { Link, NavLink } from "react-router-dom";
import Navlinks from "./Navlinks";
import { PiUserList } from "react-icons/pi";
import { IoCloseOutline } from "react-icons/io5";
import { BsChevronRight } from "react-icons/bs";
import { IoArrowBack } from "react-icons/io5";
import Sidefooter from "../Footer/Sidefooter";
import Sidenavlinks from "./Sidenavlinks";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { LiaShoppingBagSolid } from "react-icons/lia";

function Header() {
  const [smenu, setsmenu] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <>
      <header className=" h-14 lg:h-20  w-full shadow-md sticky top-0 z-20 bg-white ">
        <nav className=" hidden lg:flex h-20">
          <div className=" lg:w-[10%] lg:items-center items-center mx-auto lg:mx-auto text-center lg:justify-center ">
            <Link to="/">
              <div className="lg:h-[70px] lg:w-[120px] h xl:pl-10  ">
                <img src={logo} alt="" className="h-[80px] w-[100px] " />
              </div>
            </Link>
          </div>

          <Navlinks />
          <div className="  lg:w-[30%] xl:[35%] w-[35%] items-center py-5 sm:ml-40 lg:ml-[0%]">
            <div className="bg-stone-100 flex flex-row focus:bg-slate-50 overflow-hidden h-10 rounded-sm">
              <div className="lg:w-8 xl:w-12 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w- h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
              <div className="w-[100%]">
                <input
                  type="search"
                  className="w-full h-10 p-3 text-sm bg-stone-100 focus:outline-none dm"
                  placeholder="Search for products brand and more"
                />
              </div>
            </div>
          </div>
          <div className=" lg:w-[17%] xl:[15%] flex flex-row p-4  lg:m-auto">
            <div className=" mx-3 text-xs font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className="w-6 pb-1 h-6 mx-auto "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              Profile
            </div>
            <div className="mx-3 text-xs font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className="w-6 pb-1 h-6 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              Wishlist
            </div>
            <div className=" mx-3 text-xs font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className="w-6 h-6 pb-1 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              Bag
            </div>
          </div>
        </nav>

        {/* -----------Mobile View---------------- */}
        <div
          className={`flex h-14 justify-between sticky top-0 -z-10 lg:hidden`}
        >
          <div
            className={` flex h-14 pl-3 items-center text-2xl cursor-pointer `}
          >
            <AiOutlineMenuUnfold onClick={() => setsmenu(false)} />

            <Link to="/">
              <div className="h-[50px] w-[90px] items-center pl-2">
                <img src={logo} alt="" className="h-[55px]" />
              </div>
            </Link>
          </div>
          <div className="flex items-center py-4 space-x-2 mr-4 text-2xl">
            <IoSearch
              className="text-[22px]"
              onClick={() => setSearchOpen(true)}
            />

            <Link to="/">
              <IoMdHeartEmpty />
            </Link>
            <Link to="/">
              <LiaShoppingBagSolid />
            </Link>
          </div>
        </div>
        <div
          className={`lg:hidden  w-[100%] py-4 z-50 -top-2 absolute ${
            searchOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="bg-white flex flex-row focus:bg-slate-50 overflow-hidden h-10 rounded-sm">
            <div className=" p-3">
              <IoArrowBack
                className="text-[22px]"
                onClick={() => setSearchOpen(false)}
              />
            </div>
            <div className="w-[100%]">
              <input
                type="search"
                className="w-full h-10 p-3 text-sm bg-white focus:outline-none dm"
                placeholder="Search for products brand and more..."
              />
            </div>
            <div className="w-14  p-3">
              <IoSearch className="text-[22px]" />
            </div>
          </div>
        </div>
        {/* mobile nav ends here..  */}

        <div
          className={`top-0 lg:hidden w-full h-full backdrop-blur-sm backdrop-brightness-75 fixed overflow-y-scroll  duration-75 ${
            !smenu ? "left-0" : "left-[-100%]"
          }`}
        >
          <div className={` bg-slate-50 w-[84%] md:max-w-[400px] z-10 h-full border-r-[5px] border-black-500 `}>
            <div className=" h-[130px] bg-neutral-700 w-full border-neutral-500 ">
              <div className=" p-[12px] h-full  w-full">
                <div className="h-[60%]">
                  <div className=" bg-white rounded-md h-[50px] w-[50px] float-left m-2 ">
                    <div className="text-4xl pl-2 pt-2">
                      <PiUserList />
                    </div>
                  </div>
                  <div
                    className=" text-white text-3xl float-right"
                    onClick={() => setsmenu(true)}
                  >
                    <IoCloseOutline />
                  </div>
                </div>
                <div className="h-[40%] text-white pt-4 pl-2">
                  <h2 className="text-[15px] font-serif font-semibold">
                    Alexender User
                    <div className=" text-[16px] text-white float-right font-bold">
                      <BsChevronRight />
                    </div>
                  </h2>
                </div>
              </div>
            </div>
            <div className="">
              <div className="m-0">
                <Sidenavlinks />
                <Sidefooter />
              </div>
            </div>
          </div>
        </div>
        
      </header>
    </>
  );
}

export default Header;
