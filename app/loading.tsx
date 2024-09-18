import { Spin } from "antd";

export default function Loading() {
  return (
    <div className="grid place-items-center h-screen">
      <Spin size="large" />
    </div>
  );
}
