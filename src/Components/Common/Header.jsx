import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import{FaTimes} from "react-icons/fa";
import {HiMenuAlt1} from "react-icons/hi";
import LogoImg from "../../assets/tovutisha logo.png";

const Header = ({ setShowSidebar }) => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
      setShowMenu(!showMenu);
      setShowSidebar((prevState) => !prevState);
    };
    return (
        <>
          <header className="fixed top-0 right-0 bg-[#FFFFFF] w-screen shadow-xl z-[9999] justify-between items-center px-6 flex h-[80px]" style={{ color: '#1877F2' }}>
            <div className="container py-3 sm:py-0 relative">
              <div className="flex justify-between items-center">
                {/* logo */}
                <div className="flex items-center justify-center ">
                  <Link to="/" onClick={window.scrollTo(0, 0)}>
                    <div className="flex h-full gap-2 items-center font-semibold justify-center text-primary">
                      <img src={LogoImg} alt="" className="h-16 block" />
                    </div>
                  </Link>
                </div>
                 {/* navlinks */}
                <div className="hidden md:block mt-6 ml-8">
                  <ul className="flex items-center gap-6">
                    <li className="p-4">
                      <HashLink smooth to="/">
                        Home
                      </HashLink>
                    </li>
                    <li className="p-4">
                      <NavLink
                        activeclassname="active"
                        to="/About Us"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li className="p-4">
                      <NavLink
                        activeclassname="active"
                        to="/Impacts and Insights"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        Impacts and Insights
                      </NavLink>
                    </li>
                    <li className="p-4">
                      <NavLink
                        activeclassname="active"
                        to="/Contacts"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        Contacts
                      </NavLink>
                    </li>
                    <li className="p-4">
                      <NavLink
                        activeclassname="active"
                        to="/Donate"
                        onClick={() => window.scrollTo(0, 0)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Donate
                      </NavLink>
                    </li>
                  </ul>
                </div>
            <div className="flex items-center gap-4">
              <div className="md:hidden block">
                {!showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <FaTimes
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;