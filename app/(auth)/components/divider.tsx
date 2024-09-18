import { Divider as AntdDivider } from "antd";

const Divider = ({ page }: { page?: string }) => {
  return (
    <div
      className={`${
        page === "sign-up" ? "mt-2" : "mt-8"
      } flex gap-5 px-[28%] items-center justify-center`}
    >
      <AntdDivider />
      <span className="text-stone-500">or</span>
      <AntdDivider />
    </div>
  );
};

export default Divider;
