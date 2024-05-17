import React from "react";
import logo from "../assets/logo-primary-full.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-primary-color">
      <nav className="mt-10 mx-auto max-w-7xl flex items-center justify-center gap-20 px-10 pt-10 py-20 text-white">
        <div>
          <a href="#">
            <img className="h-[120px] aspect-auto block" src={logo} alt="" />
          </a>
        </div>
        <div>
          <h3 className="text-xl font-bold">Discover</h3>
          <p>Movies</p>
          <p>TV Series</p>
          <p>People</p>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
