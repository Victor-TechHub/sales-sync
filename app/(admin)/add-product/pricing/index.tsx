import { TextField } from "@/components";
import { StepsTitle } from "../components";
import { Select } from "antd";

const { Option } = Select;

const currencies = (
  <Select defaultValue="USD" style={{ width: 60 }}>
    <Option value="USD">$</Option>
    <Option value="EUR">€</Option>
    <Option value="NAIRA">₦</Option>
    <Option value="CNY">¥</Option>
  </Select>
);

const Pricing = () => {
  return (
    <section>
      <StepsTitle title="Pricing" />
      <div className="flex flex-col gap-4 mt-4">
        <TextField
          type="number"
          suffix={currencies}
          defaultValue={0}
          label="Base Price"
          name="base-price"
        />
        <TextField label="Discount" name="discount" />
        <TextField label="Final Price" name="final-price" />
        <TextField
          type="number"
          defaultValue={0}
          label="Stock Quantity"
          name="stock-quantity"
        />
      </div>
    </section>
  );
};

export default Pricing;
