"use client";

import { RxDashboard } from "react-icons/rx";
import { FaRegCircleXmark } from "react-icons/fa6";
import { generalLinks, supportLinks, toolsLinks } from "./links";
import GroupRoute from "./group-route";
import { useAppContext } from "@/context";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = () => {
  const { isVisibleOnMobile, setIsVisibleOnMobile } = useAppContext();

  const sidebarVariant = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <>
      <nav
        className={`w-[18%] hidden md:block py-3 px-4 bg-stone-100 h-screen`}
      >
        {/* logo */}
        <div className="flex font-medium pb-5 text-xl">
          <p className="text-violet-500">Sales</p>
          <p className="text-stone-500">Sync</p>
        </div>
        <div className="bg-white flex gap-2 rounded-lg px-2 py-3 items-center shadow-md">
          <RxDashboard size={16} />
          <span>Dashboard</span>
        </div>
        <GroupRoute routes={generalLinks} title="GENERAL" />
        <GroupRoute routes={toolsLinks} title="EXTENSIONS" />
        <GroupRoute routes={supportLinks} title="SUPPORT" />
      </nav>

      {/* Mobile */}
      <AnimatePresence>
        {isVisibleOnMobile && (
          <motion.nav
            variants={sidebarVariant}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={`w-[90dvw] fixed z-10 shadow-md py-3 px-4 bg-stone-100 h-screen`}
          >
            <div className="flex justify-between mb-5 items-center">
              {/* logo */}
              <div className="flex font-medium text-xl">
                <p className="text-violet-500">Sales</p>
                <p className="text-stone-500">Sync</p>
              </div>
              <i>
                <FaRegCircleXmark
                  className="size-6 cursor-pointer hover:text-red-500"
                  onClick={() => setIsVisibleOnMobile(false)}
                />
              </i>
            </div>
            <div className="bg-white flex gap-2 rounded-lg px-2 py-3 items-center shadow-md">
              <RxDashboard size={16} />
              <span>Dashboard</span>
            </div>
            <GroupRoute routes={generalLinks} title="GENERAL" />
            <GroupRoute routes={toolsLinks} title="EXTENSIONS" />
            <GroupRoute routes={supportLinks} title="SUPPORT" />
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
