"use client";

import React, { useState } from "react";
import { Button, Flex, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";

type TableRowSelection<T extends object = object> =
  TableProps<T>["rowSelection"];

interface DataType {
  key: React.Key;
  productName: string;
  productNo: number | string;
  category: string;
  status: React.ReactNode;
}

const columns: TableColumnsType<DataType> = [
  { title: "Product Name", dataIndex: "productName" },
  { title: "Product no", dataIndex: "productNo" },
  { title: "Category", dataIndex: "category" },
  { title: "Status", dataIndex: "status" },
];

const dataSource = Array.from<DataType>({ length: 46 }).map<DataType>(
  (_, i) => ({
    key: i,
    productName: `Product ${i + 1}`,
    productNo: `${i + 1}`,
    category: "category",
    status: (
      <div className="bg-green-50 text-green-600 w-fit px-2 py-1 rounded-md">
        Available
      </div>
    ),
  })
);

const ProductsTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <Flex gap="middle" vertical>
      <Flex align="center" gap="middle">
        <Button
          type="primary"
          onClick={start}
          disabled={!hasSelected}
          loading={loading}
        >
          Delete
        </Button>
        {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
      </Flex>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataSource}
        size="middle"
      />
    </Flex>
  );
};

export default ProductsTable;
