import { useAppContext } from "@/context";
import Link from "next/link";
import { usePathname } from "next/navigation";

const GroupRoute = ({ routes, title }: { routes: any[]; title: string }) => {
  const path = usePathname();
  const { setIsVisibleOnMobile } = useAppContext();
  return (
    <section className="mt-10 text-stone-500">
      <header>
        <h3>{title}</h3>
        <ul className="ml-4 flex flex-col gap-4">
          {routes.map((item, idx) => (
            <Link
              href={item.href}
              key={idx}
              onClick={() => setIsVisibleOnMobile(false)}
            >
              <li
                className={`flex mt-4 items-center gap-1 ${
                  path === `${item.href}` && "text-blue-500"
                }`}
              >
                <item.icon size={19} />
                <p>{item.name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </header>
    </section>
  );
};

export default GroupRoute;
