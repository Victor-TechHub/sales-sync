import { Feedback } from "@/components";

const AddProductResult = () => {
  return true ? (
    <Feedback
      title="Product Added"
      type="success"
      subtitle="This product has been successfully added to your store"
    />
  ) : (
    <Feedback
      title="Oops"
      type="error"
      subtitle="Product was not added, something went wrong!"
    />
  );
};

export default AddProductResult;
