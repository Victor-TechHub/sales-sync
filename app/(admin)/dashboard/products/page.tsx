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

const Shop = () => {
  return (
    <section className="mt-5">
      <Tabs defaultActiveKey="All" items={items} onChange={onChange} />
    </section>
  );
};

export default Shop;
