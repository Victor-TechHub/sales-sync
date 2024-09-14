import Link from "next/link";

const GroupRoute = ({ routes, title }: { routes: any[]; title: string }) => {
  return (
    <section className="mt-10 text-stone-500">
      <header>
        <h3>{title}</h3>
        <ul className="ml-4 flex flex-col gap-4">
          {routes.map((item, idx) => (
            <Link href={item.href} key={idx}>
              <li className="flex mt-4 items-center gap-1">
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
