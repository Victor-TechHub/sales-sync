type HeaderProps = {
  title: string;
  subtitle: string;
};

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <header className="flex flex-col gap-3 py-4 pb-8">
      <h3 className="font-medium text-3xl">{title}</h3>
      <p className="text-stone-500">{subtitle}</p>
    </header>
  );
};

export default Header;
