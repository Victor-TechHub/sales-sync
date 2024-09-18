import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const SDKBtns = ({ page }: { page?: string }) => {
  return (
    <div
      className={`flex gap-4 items-center ${
        page === "sign-up" ? "mt-3" : "mt-8"
      }`}
    >
      <button className="border rounded-lg hover:bg-stone-100 group transition-all p-3 flex-1 flex gap-3 items-center justify-center">
        <FcGoogle
          size={20}
          className="group-hover:scale-125 transition-all duration-700"
        />
        <span className="font-medium">Google</span>
      </button>
      <button className="border rounded-lg hover:bg-stone-100 group transition-all p-3 flex-1 flex gap-3 items-center justify-center">
        <FaFacebook
          size={20}
          className="text-blue-700 group-hover:scale-125 transition-all duration-700"
        />
        <span className="font-medium">Facebook</span>
      </button>
    </div>
  );
};

export default SDKBtns;
