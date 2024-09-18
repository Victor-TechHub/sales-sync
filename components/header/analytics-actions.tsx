import { CiSearch } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { GiSettingsKnobs } from "react-icons/gi";
import { MdOutlineKeyboardCommandKey } from "react-icons/md";
import { RiExportFill } from "react-icons/ri";

const AnalyticsActions = () => {
  return (
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
          <div className="flex gap-2 items-center">
            <FaCalendarAlt size={18} className="text-stone-400" />
            Date
          </div>
        </button>
        <button className="bg-stone-100 py-2 px-4 rounded-md flex flex-1 items-center gap-2">
          <div className="flex gap-2 items-center">
            <RiExportFill size={18} className="text-stone-500" />
            Export
          </div>
        </button>
        <button className="bg-stone-100 py-2 px-4 rounded-md flex flex-1 justify-center items-center gap-2">
          <GiSettingsKnobs size={18} className="text-stone-500" />
        </button>
      </div>
    </section>
  );
};

export default AnalyticsActions;
