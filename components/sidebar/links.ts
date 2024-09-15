import { VscGraphLine } from "react-icons/vsc";
import { BsShop, BsFileEarmarkText } from "react-icons/bs";
import { TbReportMoney } from "react-icons/tb";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoCopyOutline, IoSettingsOutline } from "react-icons/io5";
import { LuCrown } from "react-icons/lu";
import { RiCustomerService2Line } from "react-icons/ri";

export const generalLinks = [
  {
    icon: VscGraphLine,
    href: "/dashboard",
    name: "Analytics",
  },
  {
    icon: BsShop,
    href: "/dashboard/shop",
    name: "Shop Analyzer",
  },
  {
    icon: BsFileEarmarkText,
    href: "#",
    name: "Sales Report",
  },
  {
    icon: TbReportMoney,
    href: "#",
    name: "Transactions",
  },
];

export const toolsLinks = [
  {
    icon: MdOutlineDashboardCustomize,
    href: "#",
    name: "Extensions",
  },
  {
    icon: IoCopyOutline,
    href: "#",
    name: "Affiliate Program",
  },
  {
    icon: LuCrown,
    href: "#",
    name: "Upgrade",
  },
];

export const supportLinks = [
  {
    icon: IoSettingsOutline,
    href: "#",
    name: "Settings",
  },
  {
    icon: RiCustomerService2Line,
    href: "#",
    name: "Help Center",
  },
];
