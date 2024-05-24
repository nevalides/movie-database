import React from "react";
import logo from "../assets/logo-primary-full.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = (media) => {
    navigate(`${media}`);
  };

  return (
    <footer className="w-full bg-primary-color">
      <nav className="mt-10 mx-auto max-w-7xl flex items-center justify-center gap-20 px-10 pt-10 py-20 text-white">
        <div>
          <a href="/">
            <img className="h-[120px] aspect-auto block" src={logo} alt="" />
          </a>
        </div>
        <div className="max-h-[120px] flex flex-col gap-2">
          <h3 className="text-xl font-bold">Discover</h3>
          <p
            className="hover:cursor-pointer"
            onClick={() => handleClick("movie")}
          >
            Movies
          </p>
          <p className="hover:cursor-pointer" onClick={() => handleClick("tv")}>
            TV Series
          </p>
          <p
            className="hover:cursor-pointer"
            onClick={() => handleClick("person")}
          >
            People
          </p>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
