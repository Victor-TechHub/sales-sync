import Link from "next/link";
import Form from "./form";
import Divider from "../components/divider";
import Header from "../components/Header";
import SDKBtns from "../components/sdk-btns";
import Footer from "../components/Footer";
import SideDisplay from "../components/side-display";

const Login = () => {
  return (
    <section className="flex min-h-dvh w-screen">
      <SideDisplay />
      <div className="flex-1 h-screen">
        <div className="p-[5%] md:p-[25%]">
          <Header
            title="Welcome back!"
            subtitle="Start managing your sales faster and better"
          />
          <Form />
          <Divider />
          <SDKBtns />
          <center className="flex gap-2 items-center justify-center mt-8">
            <p className="text-stone-500">You don&apos;t have an account?</p>
            <Link className="text-blue-500 font-medium" href="/sign-up">
              Sign Up
            </Link>
          </center>
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default Login;
