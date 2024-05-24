import React from "react";

const Button = ({ isActive, onClick, children }) => {
  return (
    <button
      className={
        isActive
          ? "px-6 py-2 rounded-full text-xs font-semibold bg-primary-color text-white"
          : "px-6 py-2 rounded-full text-xs font-semibold bg-slate-500 text-stone-300 hover:bg-slate-600 hover:text-stone-200"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
