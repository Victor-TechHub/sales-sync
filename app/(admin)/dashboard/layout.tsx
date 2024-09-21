import { Header, Sidebar } from "@/components";
import { AppContextProvider } from "@/context";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <AppContextProvider>
      <section className="flex w-screen">
        <Sidebar />
        <div className="md:w-[82%] w-dvw py-3 px-3 md:px-7">
          <Header />
          {children}
        </div>
      </section>
    </AppContextProvider>
  );
};

export default DashboardLayout;
