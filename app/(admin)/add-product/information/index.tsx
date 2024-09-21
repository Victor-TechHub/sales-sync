import { FieldErrors, UseFormRegister } from "react-hook-form";
import { StepsTitle } from "../components";
import UploadImgs from "./upload";
import { addProductForm } from "@/utils/validation";
import { InputField } from "@/components";

type InformationProps = {
  register: UseFormRegister<addProductForm>;
  errors: FieldErrors<addProductForm>;
};

const Information = ({ register, errors }: InformationProps) => {
  return (
    <section className="">
      <StepsTitle title="Information" />
      <div className="flex flex-col gap-6 mt-4">
        <UploadImgs />
        <InputField
          placeholder="Name"
          name="name"
          register={register}
          error={errors.name}
        />
        <InputField
          placeholder="Description"
          name="description"
          register={register}
          error={errors.description}
        />
        <InputField
          placeholder="Brand"
          name="brand"
          register={register}
          error={errors.brand}
        />
        <InputField
          placeholder="Stock Quantity"
          name="stockQty"
          register={register}
          error={errors.stockQty}
        />
      </div>
    </section>
  );
};

export default Information;
