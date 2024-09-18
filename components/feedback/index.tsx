import React from "react";
import { Button, Result } from "antd";
import Link from "next/link";

interface FeedBackProps {
  type: "success" | "error";
  title: string;
  subtitle: string;
}

const FeedBack = ({ type, title, subtitle }: FeedBackProps) => {
  return (
    <Result
      status={type}
      title={title}
      subTitle={subtitle}
      extra={[
        <Link href="/dashboard" key="go">
          <Button>Go to Dashboard</Button>
        </Link>,
        <Link key="add" href="/add-product">
          <Button>{type === "success" ? "Add More" : "Try Again"}</Button>
        </Link>,
      ]}
    />
  );
};

export default FeedBack;
