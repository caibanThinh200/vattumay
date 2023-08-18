'use client'

import List from "@/app/components/Product/List";
import FilterBar from "./component/FilterBar";
import Product from "./component/Product";

interface IProductFilter {}

const ProductFilter: React.FC<IProductFilter> = (props) => {
  return (
    <div className="flex gap-10">
      <div className="lg:w-4/12">
        <FilterBar />
      </div>
      <div className="lg:w-8/12">
        <Product />
      </div>
    </div>
  );
};

export default ProductFilter;
