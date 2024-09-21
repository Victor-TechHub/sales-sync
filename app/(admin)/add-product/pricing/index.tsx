import { InputField } from "@/components";
import { StepsTitle } from "../components";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { addProductForm } from "@/utils/validation";

// const currencies = (
//   <Select defaultValue="USD" style={{ width: 60 }}>
//     <Option value="USD">$</Option>
//     <Option value="EUR">€</Option>
//     <Option value="NAIRA">₦</Option>
//     <Option value="CNY">¥</Option>
//   </Select>
// );

type PricingProps = {
  register: UseFormRegister<addProductForm>;
  errors: FieldErrors<addProductForm>;
};

const Pricing = ({ register, errors }: PricingProps) => {
  return (
    <section>
      <StepsTitle title="Pricing" />
      <div className="flex flex-col gap-6 mt-4">
        <InputField
          placeholder="Base Price"
          name="basePrice"
          register={register}
          error={errors.basePrice}
        />
        <InputField
          placeholder="Discount"
          name="discount"
          register={register}
          error={errors.discount}
        />
        <InputField
          placeholder="Final Price"
          name="finalPrice"
          register={register}
          error={errors.finalPrice}
        />
      </div>
    </section>
  );
};

export default Pricing;
