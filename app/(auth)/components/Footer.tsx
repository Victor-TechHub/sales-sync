const currentYear = new Date().getFullYear();

const Footer = ({ page }: { page?: string }) => {
  return (
    <center>
      <footer
        className={`mt-14 ${
          page === "sign-up" ? "md:mt-10" : "md:mt-32"
        } text-stone-500`}
      >
        &copy; {currentYear} ALL RIGHTS RESERVED
      </footer>
    </center>
  );
};

export default Footer;
