import { useAppContext } from "@/context";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Popconfirm } from "antd";
import { useRouter } from "next/navigation";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoCheckmarkDone } from "react-icons/io5";
import { message } from "antd";

interface StepsButtonsProps {
  previousStep: () => void;
  nextStep: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

const StepsButtons = ({
  previousStep,
  nextStep,
  isFirstStep,
  isLastStep,
}: StepsButtonsProps) => {
  const router = useRouter();
  const { handleAddProduct } = useAppContext();
  const [messageApi, contextHolder] = message.useMessage();

  const addProductHandler = () => {
    const key = "updatable";
    try {
      handleAddProduct();
      messageApi.open({
        key,
        type: "loading",
        content: "Loading...",
      });
      setTimeout(() => {
        messageApi.open({
          key,
          type: "success",
          content: "Product was successfully added!",
          duration: 3,
        });
      }, 1000);
      setTimeout(() => {
        router.replace("/dashboard/products");
      }, 3000);
    } catch (err) {
      console.log(err);
      messageApi.open({
        key,
        type: "loading",
        content: "Loading...",
      });
      setTimeout(() => {
        messageApi.open({
          key,
          type: "error",
          content: "Oops! something went wrong",
          duration: 3,
        });
      }, 1000);
    }
  };

  return (
    <section className="absolute -bottom-[400px] w-full justify-between flex items-center gap-3">
      <Popconfirm
        title="Cancel Product"
        description="Are you sure you want to discard product?"
        icon={<QuestionCircleOutlined style={{ color: "red" }} />}
        onConfirm={() => router.replace("/dashboard/products")}
      >
        <button className="border-b-2 border-b-stone-900" type="button">
          Cancel
        </button>
      </Popconfirm>
      <div className="flex items-center gap-3">
        {!isFirstStep && (
          <button
            className="border-2 border-stone-950 px-4 py-2 rounded-3xl"
            onClick={previousStep}
            type="button"
          >
            Back
          </button>
        )}
        {!isLastStep && (
          <button
            className="bg-stone-950 hover:bg-stone-800 flex items-center gap-2 text-white rounded-3xl px-4 py-3"
            onClick={nextStep}
            type="button"
          >
            Continue
            <IoIosArrowRoundForward size={18} />
          </button>
        )}
        {isLastStep && (
          <>
            {contextHolder}
            <button
              onClick={addProductHandler}
              type="button"
              className="bg-stone-950 hover:bg-stone-800 transition-all flex items-center gap-2 text-white rounded-3xl px-4 py-3"
            >
              Add Product
              <IoCheckmarkDone size={18} />
            </button>
          </>
        )}
      </div>
    </section>
  );
};
export default StepsButtons;
