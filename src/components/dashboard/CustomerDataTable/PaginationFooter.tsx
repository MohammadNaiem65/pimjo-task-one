import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

interface PaginationFooterProps {
  totalItems: number;
  pagination: {
    pageIndex: number;
    pageSize: number;
  };
  setPagination: (pagination: { pageIndex: number; pageSize: number }) => void;
}

export default function PaginationFooter({
  totalItems,
  pagination,
  setPagination,
}: PaginationFooterProps) {
  const { pageIndex, pageSize } = pagination;
  const totalPages = Math.max(1, Math.ceil(totalItems / (pageSize || 1)));

  // Calculate the range of items being displayed
  const hasItems = totalItems > 0;
  const startItem = hasItems ? pageIndex * pageSize + 1 : 0;
  const endItem = hasItems
    ? Math.min((pageIndex + 1) * pageSize, totalItems)
    : 0;

  const handlePreviousPage = () => {
    if (pageIndex > 0) {
      setPagination({
        ...pagination,
        pageIndex: pageIndex - 1,
      });
    }
  };

  const handleNextPage = () => {
    if (pageIndex < totalPages - 1 && hasItems) {
      setPagination({
        ...pagination,
        pageIndex: pageIndex + 1,
      });
    }
  };

  const handlePageChange = (newPageIndex: number) => {
    if (newPageIndex !== pageIndex) {
      setPagination({
        ...pagination,
        pageIndex: newPageIndex,
      });
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const currentPage = pageIndex + 1; // Convert 0-based to 1-based
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      // Show all pages if 7 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        // Near the start: show first 3 pages, ellipsis, last 3 pages
        for (let i = 1; i <= 3; i++) {
          pages.push(i);
        }
        pages.push("...");
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pages.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        // Near the end: show first page, ellipsis, last 3 pages
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // In the middle: show first page, ellipsis, current-1, current, current+1, ellipsis, last page
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();
  const canPreviousPage = pageIndex > 0;
  const canNextPage = hasItems && pageIndex < totalPages - 1;

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-6 py-4">
      {/* Left side: Showing count */}
      <div className="text-sm text-gray-500">
        {hasItems
          ? `Showing ${startItem} to ${endItem} of ${totalItems}`
          : "No data to display"}
      </div>

      {/* Right side: Pagination controls */}
      <div className="flex items-center gap-1">
        {/* Previous button */}
        <button
          className="mr-2 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={handlePreviousPage}
          disabled={!canPreviousPage}
        >
          <FaArrowLeftLong className="h-4 w-4" />
        </button>

        {/* Page numbers */}
        {pageNumbers.map((page, index) => {
          if (page === "...") {
            return (
              <span
                key={`ellipsis-${index}`}
                className="px-2 text-sm text-gray-500"
              >
                ...
              </span>
            );
          }

          const pageNum = page as number;
          const isActive = pageNum === pageIndex + 1;

          return (
            <button
              key={pageNum}
              className={`inline-flex h-10 min-w-10 cursor-pointer items-center justify-center rounded-lg px-3 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-brand-500 text-white"
                  : "text-text hover:bg-gray-100"
              }`}
              onClick={() => handlePageChange(pageNum - 1)}
            >
              {pageNum}
            </button>
          );
        })}

        {/* Next button */}
        <button
          className="ml-2 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={handleNextPage}
          disabled={!canNextPage}
        >
          <FaArrowRightLong className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
