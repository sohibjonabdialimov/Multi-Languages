import i18next from "i18next";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Header = () => {
  const { i18n, t } = useTranslation(["common"]);

	useEffect(() => {
		if (localStorage.getItem("i18nextLng")?.length > 2) {
			i18next.changeLanguage("en");
		}
	}, []);

	const handleLanguageChange = (e) => {
		i18n.changeLanguage(e.target.value);
	};
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
        <select value={localStorage.getItem("i18nextLng")} onChange={handleLanguageChange} className="text-black">
          <option value="uz">Uzbek</option>
          <option value="en">English</option>
          <option value="ru">Russian</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
