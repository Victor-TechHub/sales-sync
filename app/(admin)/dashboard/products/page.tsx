"use client";

import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import ProductTable from "./products-table";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "all",
    label: (
      <div>
        All
        <span className="bg-stone-200 ml-2 text-stone-700 px-2 py-1 text-xs rounded-md">
          283
        </span>
      </div>
    ),
    children: <ProductTable />,
  },
  {
    key: "available",
    label: (
      <div>
        Available
        <span className="bg-stone-200 ml-2 text-stone-700 px-2 py-1 text-xs rounded-md">
          268
        </span>
      </div>
    ),
    children: <ProductTable />,
  },
  {
    key: "disabled",
    label: (
      <div>
        Disabled
        <span className="bg-stone-200 ml-2 text-stone-700 px-2 py-1 text-xs rounded-md">
          15
        </span>
      </div>
    ),
    children: <ProductTable />,
  },
];

const Products = () => {
  return (
    <section className="mt-3">
      <Tabs
        defaultActiveKey="All"
        items={items}
        onChange={onChange}
        className="flex md:block md:w-auto w-full items-center"
      />
    </section>
  );
};

export default Products;
