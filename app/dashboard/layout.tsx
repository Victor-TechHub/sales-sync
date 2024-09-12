import { Sidebar } from "@/components"

const DashboardLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <section className="flex w-screen">
            <Sidebar />
            <div className="md:w-[82%] w-full py-3 px-2">
                {children}
            </div>
        </section>
    )
}

export default DashboardLayout