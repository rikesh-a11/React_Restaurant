import React, { useState } from "react";
import { MdRestaurant } from "react-icons/md";
import { Link } from "react-scroll";
import Button from "../layouts/Button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();

  const handleChange = () => {
    setSidebar(!sidebar);
  };
  const closeSidebar = () => {
    setSidebar(false);
  };

  return (
    <>
      <div className="fixed w-full">
        <div>
          <div className=" bg-blue-100 flex flex-row justify-between p-5 md:px-32 px-5  shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className=" flex flex-row items-center cursor-pointer">
              <span>
                <MdRestaurant size={32} />
              </span>
              <h1
                onClick={() => navigate("/")}
                className=" text-xl font-semibold"
              >
                RestroWeb
              </h1>
            </div>
            <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
              <Link
                onClick={() => navigate("/")}
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-brightColor transition-all cursor-pointer"
              >
                Home
              </Link>
              <div className="relative group">
                <div className="flex items-center gap-1">
                  <Link
                    onClick={() => navigate("/dishes")}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="hover:text-brightColor  transition-all cursor-pointer"
                  >
                    Dishes
                  </Link>
                </div>
              </div>
              <Link
                onClick={() => navigate("/about")}
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-brightColor  transition-all cursor-pointer"
              >
                About
              </Link>
              <Link
                onClick={() => navigate("/menu")}
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-brightColor  transition-all cursor-pointer"
              >
                Menu
              </Link>
              <Link
                onClick={() => navigate("/contact")}
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-brightColor transition-all cursor-pointer"
              >
                Contact
              </Link>
              <Button onClick={()=> navigate("/register")} title="Sign in" />
            </nav>

            <div className="md:hidden flex items-center">
              {sidebar ? (
                <AiOutlineClose size={25} onClick={handleChange} />
              ) : (
                <AiOutlineMenu size={25} onClick={handleChange} />
              )}
            </div>
          </div>
          <div
            className={` ${
              sidebar ? "translate-x-0" : "-translate-x-full"
            } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
          >
            <Link
              onClick={() => {
                navigate("/");
                closeSidebar();
              }}
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Home
            </Link>
            <Link
              onClick={() => {
                navigate("/dishes");
                closeSidebar();
              }}
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor  transition-all cursor-pointer"
            >
              Dishes
            </Link>
            <Link
              onClick={() => {
                navigate("/about");
                closeSidebar();
              }}
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor  transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              onClick={() => {
                navigate("/menu");
                closeSidebar();
              }}
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor  transition-all cursor-pointer"
            >
              Menu
            </Link>
            <Link
              onClick={() => {
                navigate("/contact");
                closeSidebar();
              }}
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Contact
            </Link>
            <Button title="sign in" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
