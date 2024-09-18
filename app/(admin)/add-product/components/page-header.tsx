import { QuestionCircleOutlined } from "@ant-design/icons";
import { Divider } from "antd";

const PageHeader = () => {
  return (
    <header className="flex justify-between items-center border-b my-5 py-5">
      <div className="flex items-center gap-3">
        {/* Logo */}
        <div className="flex font-medium text-xl">
          <p className="text-blue-500">Sales</p>
          <p className="text-stone-500">Sync</p>
        </div>
        <Divider type="vertical" className="h-10" />
        <p>Add Products</p>
      </div>
      <div>
        <QuestionCircleOutlined /> Need help?
      </div>
    </header>
  );
};

export default PageHeader;
