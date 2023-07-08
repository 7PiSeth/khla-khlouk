import React, { useEffect, useState } from "react";
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";

const TopBar = () => {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`w-screen h-[60px] px-5 md:px-7 flex justify-between items-center`}>
      <div className="absolute select-none left-[calc(50%-41px)]">
        <div className="relative w-20 bg-slate-300 dark:bg-slate-800 group rounded-full flex items-center cursor-pointer">
          <div
            className="w-1/2 h-full p-2 z-10"
            onClick={() => {
              document.querySelector("meta[name='theme-color']").content =
                "#FFFFFF";
              setDarkMode(false);
            }}
          >
            <FaSun size={20} />
          </div>

          <div
            className="w-1/2 h-full p-2 z-10"
            onClick={() => {
              document.querySelector("meta[name='theme-color']").content =
                "#0D1117";
              setDarkMode(true);
            }}
          >
            <BsFillMoonStarsFill size={20} className="float-right" />
          </div>
          <div
            className={`bg-slate-200 dark:bg-[#171d25] p-4 rounded-full shadow-inner
           transform-gpu transition-transform duration-300 ease-in-out absolute left-[2px] ${darkMode ? "translate-x-[44px] shadow-[#fcfcfc33]" : ""
              }`}
          ></div>
        </div>
      </div>
      <div className="absolute right-7 sm:left-[calc(53%)] top-[14px] flex items-center
      rounded-lg text-white font-extrabold w-fit
      bg-gradient-to-b from-sky-400 to-blue-800">
        {/* <p className="w-14 font-moul p-1 font-extralight text-center">ប្រាក់</p> */}
        <GiTakeMyMoney size={35} className="p-1"  />
        <p id="money" className="rounded-r-lg p-1 font-moul bg-[#95c2ee] text-black">១,០០០៛</p>
      </div>
    </div>
  )
}

export default TopBar