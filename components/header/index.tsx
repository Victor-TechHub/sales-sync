"use client";

import Image from "next/image";
import { GoBell } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { MdOutlineKeyboardCommandKey } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";
import { RiExportFill } from "react-icons/ri";
import { TfiHelpAlt } from "react-icons/tfi";
import { useAppContext } from "@/context";

const Header = () => {
  const { setIsVisibleOnMobile } = useAppContext();
  return (
    <header className="flex flex-col gap-7">
      <section className="flex justify-between items-center">
        <div>
          <h4 className="text-2xl">Welcome Back Victor</h4>
          <p>
            You have 2 <span className="text-blue-500">unread</span>{" "}
            notifications
          </p>
        </div>

        <div className="flex items-center gap-2">
          <i className="shadow-lg relative border border-stone-100 rounded-full p-2 group">
            <TfiHelpAlt
              className="block md:hidden size-6 cursor-pointer group-hover:scale-110 transition-all"
              onClick={() => setIsVisibleOnMobile(true)}
            />
          </i>
          <div className="shadow-lg cursor-pointer relative border border-stone-100 rounded-full p-2 group">
            <GoBell
              size={19}
              className="group-hover:scale-110 transition-all"
            />
            <span className="absolute bg-red-500 rounded-full top-[8px] right-[10px] h-[7px] w-[7px]" />
          </div>
          <div className="rounded-full h-10 w-10 cursor-pointer overflow-clip group">
            <Image
              src="/test.jpg"
              width={100}
              height={100}
              alt="Profile Photo"
              className="group-hover:scale-110 h-full w-full transition-all object-cover"
              priority
            />
          </div>
          <div className="hidden md:block">
            <h6 className="text-sm font-medium">Victor Adeshina</h6>
            <p>Admin</p>
          </div>
        </div>
      </section>

      <section className="flex md:flex-row flex-col justify-between gap-4 md:gap-0 md:items-center">
        <div className="flex bg-stone-100 md:w-[50%] items-center px-2 w-full rounded-md">
          <CiSearch size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent px-2 py-3 outline-none flex-1"
          />
          <div className="flex items-center gap-1">
            <span className="bg-[#FFF] grid place-content-center rounded-md h-7 w-7">
              <MdOutlineKeyboardCommandKey size={18} />
            </span>
            <span className="bg-[#FFF] grid place-content-center rounded-md text-sm h-7 w-7">
              K
            </span>
          </div>
        </div>

        <div className="flex gap-1 justify-between md:items-center">
          <button className="bg-stone-100 py-2 px-4 rounded-md flex flex-1 items-center gap-2">
            <FaCalendarAlt size={18} className="text-stone-400" />
            Date
          </button>
          <button className="bg-stone-100 py-2 px-4 rounded-md flex flex-1 items-center gap-2">
            <RiExportFill size={18} className="text-stone-500" />
            Export
          </button>
          <button className="bg-stone-100 py-2 px-4 rounded-md flex flex-1 justify-center items-center gap-2">
            <GiSettingsKnobs size={18} className="text-stone-500" />
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;
