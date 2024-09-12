"use client"

import {
    ResponsiveContainer,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    AreaChart,
    Area
} from 'recharts';
import { HiOutlineDotsVertical } from "react-icons/hi";

const data = [
    { name: 'Jan', uv: 406, pv: 714, amt: 2333 },
    { name: 'Feb', uv: 107, pv: 302, amt: 2831 },
    { name: 'Mar', uv: 167, pv: 844, amt: 3608 },
    { name: 'Apr', uv: 194, pv: 317, amt: 4261 },
    { name: 'May', uv: 515, pv: 835, amt: 2075 },
    { name: 'Jun', uv: 578, pv: 592, amt: 4326 },
    { name: 'Jul', uv: 339, pv: 536, amt: 3965 },
    { name: 'Aug', uv: 216, pv: 460, amt: 4392 },
    { name: 'Sep', uv: 172, pv: 467, amt: 2716 },
    { name: 'Oct', uv: 222, pv: 472, amt: 2799 },
    { name: 'Nov', uv: 211, pv: 903, amt: 1834 },
    { name: 'Dec', uv: 498, pv: 520, amt: 2307 }
];

const LineChart = () => {
    return (
        <section className='mt-5 border rounded-md px-2 py-4 w-full pb-10 h-[340px]'>
            <header className="flex justify-between items-center mb-3">
                <h2 className='text-base font-medium'>Transaction activity</h2>
                <HiOutlineDotsVertical size={19} />
            </header>
            <ResponsiveContainer>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="80%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" height={20} />
                    <YAxis width={30} />
                    <CartesianGrid strokeDasharray="4 4" vertical={false} />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </ResponsiveContainer>
        </section>
    )
}

export default LineChart