import React from "react";
import { logo, profile } from "../assests";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { GoProjectSymlink } from "react-icons/go";
import { GoReport } from "react-icons/go";
import { MdOutlineDashboard } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import Sidebaritems from "./Sidebaritems";

const Sidebar = ({ children }) => {
  return (
    <>
      <aside className=" h-screen">
        <nav className=" h-full flex flex-col bg-white border-r shadow-lg shadow-slate-400/40">
          <div className="p-4  pb-2 flex justify-center items-center gap-x-4">
            <img src={logo} alt="logo" className=" w-32" />
            <button className=" p-2 rounded-lg bg-gray-200 hover:bg-slate-300 ">
              <AiOutlineDoubleLeft size={15} />
            </button>
          </div>
          <ul className="flex-1 p-6 space-y-2">
            <Sidebaritems icon={<FaHome />} text="Home" alert />
            <Sidebaritems
              icon={<MdOutlineDashboard />}
              text="DashBoard"
              active
            />
            <Sidebaritems icon={<GoProjectSymlink />} text="Projects" alert />
            <Sidebaritems icon={<FaRegCalendarAlt />} text="Calender" />
            <Sidebaritems icon={<FaTasks />} text="Task" />
            <Sidebaritems icon={<GoReport />} text="Reporting" />
            <hr className=" " />
            <Sidebaritems icon={<IoSettingsOutline />} text="Settings" />
            <Sidebaritems icon={<FaHandsHelping />} text="Help" />
          </ul>
          <div className=" border-t flex p-3">
            <img
              src={profile}
              alt="profile"
              className=" w-10 h-10 rounded-md"
            />
            <div className=" flex justify-between items-center overflow-hidden ml-2 ">
              <div className=" leading-4 ">
                <h4 className=" font-medium">Leading Genius</h4>
                <span className=" text-xs text-gray-500">
                  leadingdenius@gmail.com
                </span>
              </div>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
