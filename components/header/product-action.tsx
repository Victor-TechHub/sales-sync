"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { GiSettingsKnobs } from "react-icons/gi";

const ProductActions = () => {
  const router = useRouter();
  return (
    <header className="flex flex-col md:flex-row gap-4 md:gap-0 md:items-center md:justify-between">
      <h3 className="font-medium text-base">Products</h3>
      <section className="flex gap-2">
        <div className="flex bg-stone-100 md:w-[50%] items-center px-2 w-full rounded-md">
          <CiSearch size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent px-2 py-3 outline-none flex-1"
          />
        </div>
        <button className="bg-stone-100 py-2 px-4 rounded-md flex justify-center items-center gap-2">
          <GiSettingsKnobs size={18} className="text-stone-500" />
        </button>
        <button
          className="bg-green-500 text-nowrap text-white px-3 py-2 rounded-lg"
          onClick={() => router.push("/add-product")}
        >
          Add new Product
        </button>
      </section>
    </header>
  );
};

export default ProductActions;
