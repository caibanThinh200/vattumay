"use client";

import List from "@/app/components/Product/List";
import FilterBar from "./component/FilterBar";
import Product from "./component/Product";
import { useEffect, useState } from "react";
import { IProductField } from "@/app/interface/product";
import {
  getAllProducts,
  getFilterValues,
  getFilterWidget,
  getSingleSubCategory,
} from "@/app/action";
import { useSettingContext } from "@/app/context/setting";
import { IFilterParamsField, IFilterWidgetField } from "@/app/interface/filter";
import { usePathname, useRouter } from "next/navigation";

interface IProductFilter {
  params?: any;
}

const ProductFilter: React.FC<IProductFilter> = (props) => {
  const settingContext = useSettingContext();
  const [result, setResult] = useState<IProductField[]>([]);
  const [filterValues, setFilterValues] = useState<IFilterParamsField[]>([]);
  const [filters, setFilters] = useState<IFilterWidgetField[]>([]);
  const [filterParams, setFilterParams] = useState<any>({});

  useEffect(() => {
    getSingleSubCategory(props?.params?.subCategory).then((res) => {
      settingContext.updateBreadcrump &&
        settingContext.updateBreadcrump([
          {
            href: `/san-pham/${props?.params?.category}`,
            name: "Tìm sản phẩm",
          },
          {
            href: `/san-pham/${props?.params?.subCategory}`,
            name: res?.data?.title?.rendered,
            active: true,
          },
        ]);
    });
  }, [props?.params]);

  useEffect(() => {
    getAllProducts({
      sub_category: props.params?.subCategory,
      filter_params: filterParams?.id,
      per_page: 900,
    }).then((res) => {
      setResult(res?.data);
    });

    getFilterWidget({ per_page: 900 }).then((res) => {
      setFilters(res.data);
    });

    getFilterValues({ per_page: 900 }).then((res) => {
      setFilterValues(res.data);
    });
  }, [props.params, filterParams]);

  // useEffect(() => {
  //   if (filterParams?.id) {
  //     getAllProducts
  //   }
  // }, [filterParams, router, pathname]);

  return (
    <div className="flex gap-10">
      <div className="lg:w-4/12">
        <FilterBar
          setFilterParams={setFilterParams}
          filters={filters}
          filterParams={filterParams}
          params={filterValues}
        />
      </div>
      <div className="lg:w-8/12">
        <Product result={result} />
      </div>
    </div>
  );
};

export default ProductFilter;
