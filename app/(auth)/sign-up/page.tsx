import Link from "next/link";
import Header from "../components/Header";
import Form from "./form";
import Divider from "../components/divider";
import SDKBtns from "../components/sdk-btns";
import Footer from "../components/Footer";
import SideDisplay from "../components/side-display";

const SignUp = () => {
  return (
    <section className="flex min-h-dvh w-screen">
      <SideDisplay />
      <div className="flex-1 h-screen">
        <div className="p-[5%] md:p-[25%]">
          <Header
            title="Create your account"
            subtitle="Enter you details below to create your account and get started."
          />
          <Form />
          <Divider page="sign-up" />
          <SDKBtns page="sign-up" />
          <center className="flex gap-2 items-center justify-center mt-8">
            <p className="text-stone-500">Already have an account?</p>
            <Link className="text-blue-500 font-medium" href="/login">
              Login
            </Link>
          </center>
          <Footer page="sign-up" />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
