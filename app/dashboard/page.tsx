import { AnalyticsCard, Header } from "@/components"
import dynamic from "next/dynamic"

const LineChart = dynamic(() => import("@/components/line-chart"), { ssr: false })

const data = [
    {
        title: "Gross Revenue",
        amount: "2,480.32",
        interval: "from Jan 01, 2024 - March 30,2024",
        percentageRise: 2.15,
        percentageFall: null
    },
    {
        title: "Avg. Order Value",
        amount: "56.12",
        interval: "from Jan 01, 2024 - March 30,2024",
        percentageRise: null,
        percentageFall: 2.15
    },
    {
        title: "Total Orders",
        amount: "230",
        interval: "from Jan 01, 2024 - March 30,2024",
        percentageRise: 2.15,
        percentageFall: null
    }
]

const Dashboard = () => {
    return (
        <div className="px-3">
            <Header />
            <section className="flex md:overflow-auto flex-col md:flex-row md:w-auto mt-5 gap-5">
                {data.map((item, idx) => (
                    <AnalyticsCard
                        key={idx}
                        title={item.title}
                        percentageRise={item.percentageRise}
                        percentageFall={item.percentageFall}
                        interval={item.interval}
                        amount={item.amount}
                    />
                ))}
            </section>
            <LineChart />
        </div>
    )
}

export default Dashboard