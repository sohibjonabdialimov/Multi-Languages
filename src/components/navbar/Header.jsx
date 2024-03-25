import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-[80px] bg-slate-800 text-white pt-7">
      <div className="flex justify-between items-center w-[80%] mx-auto ">
        <ul className="flex items-center gap-5">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/profile"}>Profile</Link>
          </li>
        </ul>
        <select className="text-black">
          <option value="uz">Uzbek</option>
          <option value="en">English</option>
          <option value="ru">Russian</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
