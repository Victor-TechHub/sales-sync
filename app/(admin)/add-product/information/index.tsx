import { StepsTitle } from "../components";
import UploadImgs from "./upload";
import { TextArea, TextField } from "@/components";

const Information = () => {
  return (
    <section>
      <StepsTitle title="Information" />
      <div className="flex flex-col gap-4 mt-4">
        <UploadImgs />
        <TextField label="Name" name="product-name" />
        <TextArea label="Description" name="product-description" />
        <TextField label="Brand" name="product-brand" />
      </div>
    </section>
  );
};

export default Information;
