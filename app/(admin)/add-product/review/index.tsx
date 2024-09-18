import Image from "next/image";
import { StepsTitle } from "../components";
import { Divider, Table } from "antd";
import { CiEdit } from "react-icons/ci";
// import { useAppContext } from "@/context";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

const dataSource = [
  {
    key: "1",
    price: "200,000 USD",
    discount: "10%",
    "final-price": "190,000",
    "stock-quantity": "15 units",
  },
];

const columns = [
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Discount",
    dataIndex: "discount",
    key: "discount",
  },
  {
    title: "Final Price",
    dataIndex: "final-price",
    key: "final-price",
  },
  {
    title: "Stock Quantity",
    dataIndex: "stock-quantity",
    key: "stock-quantity",
  },
];

const Review = () => {
  // const { addProductSuccess } = useAppContext();
  // const router = useRouter();

  // useEffect(() => {
  //   if (addProductSuccess) {
  //     router.replace("/add-product/result");
  //   }
  // }, [addProductSuccess]);

  return (
    <section>
      <StepsTitle title="Review" />
      <div className="flex flex-col gap-1 mt-4">
        <div className="flex gap-4 flex-col justify-center items-center">
          <Image
            src={"/test.jpg"}
            width={100}
            height={100}
            priority
            className="h-[150px] w-[200px] rounded-md shadow-xl"
            alt="product-review"
          />
          <h3 className="font-medium text-xl">Sony BRAVIA XR OLED 4K TV</h3>
        </div>
        <Divider />
        <div>
          <header className="flex justify-between items-center">
            <h3 className="font-medium">Product Details</h3>
            <span className="text-blue-500 flex gap-2 items-center group cursor-pointer">
              <CiEdit size={18} className="group-hover:mr-1 transition-all" />
              Edit
            </span>
          </header>
          <section className="mt-3 flex flex-col gap-2">
            <div className="flex justify-between">
              <p className="text-stone-500">Product Name</p>
              <div>Sony BRAVIA XR OLED 4K TV</div>
            </div>
            <div className="flex justify-between">
              <p className="text-stone-500">Product Description</p>
              <div className="w-[500px] line-clamp-5">
                The <strong>Sony BRAVIA XR OLED 4K TV</strong> delivers stunning
                picture quality with deep blacks, vibrant colors, and lifelike
                clarity, thanks to its Cognitive Processor XR™. With OLED
                self-illuminating pixels, Dolby Vision, and HDR10 support, it
                offers an immersive visual experience. The TV&apos;s{" "}
                <strong>Acoustic Surface Audio+™</strong> turns the screen into
                a sound source for rich, multidimensional audio. Smart features
                include <strong>Google TV</strong>, voice control, and HDMI 2.1
                support for a seamless gaming experience. Its sleek design makes
                it a perfect fit for any modern living room.
              </div>
            </div>
          </section>
        </div>
        <Divider />
        <div>
          <header className="flex justify-between items-center">
            <h3 className="font-medium">Pricing Details</h3>
            <span className="text-blue-500 flex gap-2 group items-center cursor-pointer">
              <CiEdit size={18} className="group-hover:mr-1 transition-all" />
              Edit
            </span>
          </header>
          <Table
            dataSource={dataSource}
            columns={columns}
            className="mt-3"
            pagination={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Review;
