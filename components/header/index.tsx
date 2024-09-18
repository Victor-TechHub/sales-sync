"use client";

import Image from "next/image";
import { GoBell } from "react-icons/go";
import { TfiHelpAlt } from "react-icons/tfi";
import { useAppContext } from "@/context";
import AnalyticsActions from "./analytics-actions";
import { usePathname } from "next/navigation";
import ProductActions from "./product-action";

const Header = () => {
  const { setIsVisibleOnMobile } = useAppContext();
  const path = usePathname();

  const ActionGroup = ({ path }: { path: string }) => {
    switch (path) {
      case "/dashboard":
        return <AnalyticsActions />;
      case "/dashboard/products":
        return <ProductActions />;
      default:
        break;
    }
  };

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
          <i className="shadow-lg block md:hidden relative border border-stone-100 rounded-full p-2 group">
            <TfiHelpAlt
              className="size-6 cursor-pointer group-hover:scale-110 transition-all"
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
      <ActionGroup path={path} />
    </header>
  );
};

export default Header;
