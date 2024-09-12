import { RxDashboard } from "react-icons/rx";
import { generalLinks, supportLinks, toolsLinks } from "./links";
import GroupRoute from "./group-route";

const Sidebar = () => {
    return (
        <nav className="w-[18%] hidden md:block py-3 px-4 bg-stone-100 h-screen">
            <div className="flex h-4 mb-9 font-medium text-xl">
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
    )
}

export default Sidebar