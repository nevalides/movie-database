import React from "react";
import logo from "../assets/logo-alt-short.svg";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Header = () => {
  // const isLogin = localStorage.getItem("isLogin");

  // if (isLogin) {
  //   const favoriteList = localStorage.getItem("localFav");
  // }

  const navigate = useNavigate();

  const handleClick = (media) => {
    navigate(`${media}`);
  };

  return (
    <>
      <header className="bg-primary-color w-full">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex justify-start gap-6 md:flex-0">
            <a href="#">
              <img className="h-6 w-auto block" src={logo} alt="" />
            </a>
            <ul className="flex gap-6 text-white text-center font-bold">
              <button
                className="cursor-pointer"
                onClick={() => handleClick("movie")}
              >
                Movies
              </button>
              <button
                className="cursor-pointer"
                onClick={() => handleClick("tv")}
              >
                TV Shows
              </button>
              <button
                className="cursor-pointer"
                onClick={() => handleClick("people")}
              >
                People
              </button>
            </ul>
          </div>
          <div className="flex justify-end gap-4 md:flex-0">
            <ul className="flex gap-6 text-white text-center font-bold">
              <button className="cursor-pointer">Login</button>
              <button className="cursor-pointer px-4 py-2 rounded-[30px] bg-gradient-to-r from-tertiary-color to-secondary-color">
                Register
              </button>
            </ul>
            {/* <p className="text-white text-center font-bold">Welcome, user1234</p> */}
          </div>
        </nav>
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
