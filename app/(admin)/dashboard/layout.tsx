import { Header, Sidebar } from "@/components";
import { AppContextProvider } from "@/context";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <AppContextProvider>
      <section className="flex w-screen">
        <Sidebar />
        <div className="md:w-[82%] w-full py-3 px-2">
          <Header />
          {children}
        </div>
      </section>
    </AppContextProvider>
  );
};

export default DashboardLayout;
