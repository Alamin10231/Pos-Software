import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { Link } from "react-router";
import Bangladesh from "../../../assets/Bangladesh/bangladesh.png";
import avatar from "../../../assets/avatar/IMG-20241220-WA0000.jpg";
import { MdInsertEmoticon } from "react-icons/md";
import "animate.css";

import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { LuMessageSquare } from "react-icons/lu";
import CustomHook from "../../CustomHook/CustomHook";

const Navbar = ({ isCollapsed }) => {
  const [clicked, setclicked] = useState(null);
  const [profile, setProfile] = useState(null);
  return (
    <div className=" items-center w-full hidden lg:block">
      <nav
        className={` flex items-center justify-between ${
          isCollapsed ? " pr-[130px]" : " "
        } py-4 bg-[#ffffff] w-full fixed  pr-[320px] pl-4 transition-all duration-300 ease-in-out`}
      >
        <div className="relative flex items-center justify-between">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <CustomHook></CustomHook>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex  items-center justify-between gap-4 border-r border-gray-500 pr-2">
            <button className="flex  items-center justify-center gap-1 text-[12px] py-1 rounded-md border   px-4  bg-[#FFC300] text-white ">
              <span>
                <FaPlusCircle />
              </span>
              Add New
            </button>
            <button className="flex  items-center justify-center gap-1 text-[12px] py-1 rounded-md border   px-4  bg-[#1abc9c] text-white ">
              <span>
                <FaComputer />
              </span>
              Pos
            </button>
            <Link to="/login">
              <button>login </button>
            </Link>
          </div>

          <div className=" flex gap-2 ">
            <div
              className="relative duration-700 transition-all bg-gray-200 rounded-3xl py-2 px-2"
              onClick={() => setclicked(!clicked)}
            >
              <div>
                <img className="w-5 h-5" src={Bangladesh} alt="" />
              </div>
              {!clicked ? (
                <h1></h1>
              ) : (
                <button className="bg-white shadow-md rounded-lg absolute top-11 px-4 animate__animated animate__fadeInUp ">
                  <div className="flex items-center justify-center gap-2 py-1 px-4  ">
                    <MdInsertEmoticon className=" " />
                    country
                  </div>
                  <div className="flex items-center justify-center gap-2 py-1 px-4 ">
                    <MdInsertEmoticon className="" />
                    country
                  </div>
                </button>
              )}
            </div>
            <div>
              <div className="flex items-center justify-center relative bg-gray-200 rounded-3xl py-2 px-2">
                <LuMessageSquare className="w-5 h-5  hover:text-yellow-400 duration-300" />
                <p className="absolute bg-red-600 rounded-full text-xs px-1 text-white font-bold -top-1 -right-1 ">
                  0
                </p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-3xl py-2 px-2">
              <IoIosNotificationsOutline className="w-5 h-5  hover:text-yellow-400 duration-300" />{" "}
            </div>
            <div className="bg-gray-200 rounded-3xl py-2 px-2">
              <CiSettings className="w-5 h-5  hover:text-yellow-400 duration-300" />{" "}
            </div>

            <div
              className="relative duration-300 transition-all   rounded-3xl py-2 px-2"
              onClick={() => setProfile(!profile)}
            >
              <div className="w-8 h-5 items-center flex">
                <img
                  className=" object-cover rounded-md "
                  src={avatar}
                  alt=""
                />
              </div>
              {!profile ? (
                <h1></h1>
              ) : (
                <button className="bg-white shadow-md rounded-lg absolute top-11 right-0 px-2 items-center flex animate__animated animate__fadeInUp ">
                  <div className=" items-right gap-2  px-4  py-2 ">
                    <div className="  gap-2 flex mx-auto pr-20 pl-8 items-center justify-center my-1 bg-gray-100 rounded-md py-6 w-full">
                      <img
                        className=" object-cover rounded-full w-10 h-10 "
                        src={avatar}
                        alt=""
                      />
                      <div className=" text-left">
                        <h1 className="text-sm w-full text-nowrap">
                          Alamin Hossain
                        </h1>
                        <p className="text-sm text-gray-500">admin</p>
                      </div>
                    </div>
                    <div className="text-left py-4 border-b border-gray-300">
                      <div className="flex items-center justify-left gap-2 py-1   ">
                        <MdInsertEmoticon className=" " />
                        My Profile
                      </div>
                      <div className="flex items-center justify-left gap-2 py-1  ">
                        <MdInsertEmoticon className="" />
                        Reports
                      </div>
                      <div className="flex items-center justify-left gap-2 py-1  ">
                        <MdInsertEmoticon className="" />
                        setting
                      </div>
                    </div>
                    <div className="flex items-center justify-left gap-2 py-1  ">
                      <MdInsertEmoticon className="text-red-700" />
                      <Link to="/login">
                        <p className="text-red-700">logout</p>
                      </Link>
                    </div>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
