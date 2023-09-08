import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
// import {useRouter} from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import queryString from "querystring";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import "./pagination.scss";
import Pagination from "rc-pagination";

interface IArchivePaginationProps {
  total: number;
  currentPage?: number;
  postPerPage?: number;
}

const ArchivePagination: React.FC<IArchivePaginationProps> = (props) => {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    setCurrentPage(
      ((parseInt(params.get("page") as string)) as number) || 0
    );
  }, [router, params]);

  const handleChangePageIndex = useCallback(
    (pageIndex: number) => {
      setCurrentPage(pageIndex);
      router.replace(
        `${pathname}?${queryString.stringify({
          page: pageIndex,
        })}`
      );
    },
    [router]
  );

  const handleMoveNextPage = useCallback(() => {
    const nextPageIndex =
      currentPage <= props.total ? currentPage + 1 : currentPage;
    setCurrentPage(nextPageIndex);
    router.replace(
      `${pathname}?${queryString.stringify({
        page: nextPageIndex,
      })}`
    );
  }, [currentPage, props.total, router, pathname]);

  const handleMovePrevPage = useCallback(() => {
    const prevPageIndex = currentPage > 1 ? currentPage - 1 : currentPage;
    setCurrentPage(prevPageIndex);
    router.replace(
      `${pathname}?${queryString.stringify({
        page: prevPageIndex,
      })}`
    );
  }, [currentPage, router, pathname]);

  const renderPagination = (
    current: number,
    type: "page" | "prev" | "next" | "jump-prev" | "jump-next",
    originalElement: React.ReactNode
  ) => {
    if (type === "prev") {
      return (
        <button
          disabled={currentPage === 0}
          // href="#"
          onClick={handleMovePrevPage}
          className="relative rounded-l-md px-2 py-2 text-gray-400 border border-bright-gray hover:bg-gray-50"
        >
          <span className="sr-only">Previous</span>
          <ChevronLeftIcon className="h-[1.35rem] w-5" aria-hidden="true" />
        </button>
      );
    }
    if (type === "next") {
      return (
        <button
          disabled={currentPage === props.total - 1}
          onClick={handleMoveNextPage}
          // href="#"
          className="relative rounded-r-md px-2 py-2 text-gray-400 border border-bright-gray hover:bg-gray-50"
        >
          <span className="sr-only">Next</span>
          <ChevronRightIcon
            className="h-[1.35rem] w-[1.35rem]"
            aria-hidden="true"
          />
        </button>
      );
    }

    if (type === "page") {
      return (
        <button
          // href="#"
          // key={`paginate-${index}`}
          // onClick={() => handleChangePageIndex(index)}
          aria-current="page"
          // bg-indigo-600 text-white
          // text-gray-900 ring-1 ring-inset ring-bright-gray hover:bg-gray-50
          className={clsx(
            "relative z-10 border border-bright-gray inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 ",
            current === currentPage ? "text-begonia" : ""
          )}
        >
          {current}
        </button>
      );
    }
    return originalElement;
  };

  return (
    <div className="flex items-center justify-between border-gray-200 px-4 py-8 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          disabled={currentPage === 0}
          onClick={handleMovePrevPage}
          className="relative inline-flex cursor-default select-none items-center rounded-md border border-bright-gray bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </button>
        <button
          disabled={currentPage === props.total - 1}
          onClick={handleMoveNextPage}
          className="relative ml-3 inline-flex cursor-default select-none items-center rounded-md border border-bright-gray bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </button>
      </div>
      <div className="container hidden sm:flex sm:flex-1 sm:items-center sm:justify-end">
        <nav className="rounded-md" aria-label="Pagination">
          <Pagination
            total={props.total}
            pageSize={props.postPerPage}
            itemRender={renderPagination}
            current={currentPage}
            showSizeChanger={false}
            onChange={handleChangePageIndex}
          />
        </nav>
      </div>
    </div>
  );
};

ArchivePagination.defaultProps = {
  postPerPage: 6,
};

export default ArchivePagination;
