import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
// import {useRouter} from "next/router";
import { useCallback, useEffect, useState } from "react";
import queryString from "querystring";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface IArchivePaginationProps {
  total: number;
  currentPage?: number;
  postPerPage?: number;
}

const ArchivePagination: React.FC<IArchivePaginationProps> = (props) => {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    setCurrentPage(
      ((parseInt(params.get("page") as string) - 1) as number) || 0
    );
  }, [router, params]);

  const handleChangePageIndex = useCallback(
    (pageIndex: number) => {
      setCurrentPage(pageIndex);
      router.replace(
        `${pathname}?${queryString.stringify({
          page: pageIndex + 1,
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
        page: nextPageIndex + 1,
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
      <div className="container hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          {/* <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">{props.postPerPage}</span> of{' '}
                    <span className="font-medium">{props.total}</span> results
                </p> */}
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              disabled={currentPage === 0}
              // href="#"
              onClick={handleMovePrevPage}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-bright-gray hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-bright-gray hover:bg-gray-50 focus:outline-offset-0" */}
            {Array(props.total)
              .fill("")
              .map((_, index) => (
                <button
                  // href="#"
                  key={`paginate-${index}`}
                  onClick={() => handleChangePageIndex(index)}
                  aria-current="page"
                  // bg-indigo-600 text-white
                  // text-gray-900 ring-1 ring-inset ring-bright-gray hover:bg-gray-50
                  className={clsx(
                    "relative z-10 border border-bright-gray inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                    index === currentPage
                      ? "text-begonia"
                      : "text-gray-900 ring-1 ring-inset ring-bright-gray hover:bg-gray-50"
                  )}
                >
                  {index + 1}
                </button>
              ))}
            <button
              disabled={currentPage === props.total - 1}
              onClick={handleMoveNextPage}
              // href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-bright-gray hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

ArchivePagination.defaultProps = {
  postPerPage: 6,
};

export default ArchivePagination;
