import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  FaCaretDown,
  FaCross,
  FaMailBulk,
  FaPhoneAlt,
  FaTimes,
} from "react-icons/fa";
import { HiMail, HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

function Sidebar({ showSideBar }) {  
  
  return (
    <>
      <nav
        className={`fixed h-screen w-[250px] bg-[#ffffff] z-[999] pt-24 md:hidden text-white transition-all duration-[5000] ease-in-out ${
          showSideBar ? "left-0" : "left-[-100%]"
        } `}
      >
        <div className=" flex flex-col mt-6 ml-8 ">
          <ul className="flex flex-col ml-4 gap-2">
            <li className="">
              <NavLink
                to="/"
                // activeClsName="active"
                onClick={() => window.scrollTo(0, 0)}
              >
                Home
              </NavLink>
            </li>
            <li className="py-2">
              <NavLink
                activeclassname="active"
                to="/About Us"
                onClick={() => window.scrollTo(0, 0)}
              >
                About Us
              </NavLink>
            </li>
            <li className="py-2">
              <NavLink
                activeclassname="active"
                to="/Impacts and Insights"
                onClick={() => window.scrollTo(0, 0)}
              >
                Impact and Insights
              </NavLink>
            </li>
            <li className="py-4">
              <NavLink
                activeclassname="active"
                to="/Contacts"
                onClick={() => window.scrollTo(0, 0)}
              >
                Contacts
              </NavLink>
            </li>
            <li className="py-4">
              <NavLink
                activeclassname="active"
                to="/Donate"
                onClick={() => window.scrollTo(0, 0)}
              >
                Donate
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
