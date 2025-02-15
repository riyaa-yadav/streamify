import React, { useState } from "react";

const Skeleton = ({ columns, rows = 10 }) => (
  <div className="overflow-x-auto">
    <div className="min-w-[500px]">
      <div className="w-full overflow-x-auto border rounded-lg">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              {columns.map(({ key, width }) => (
                <th key={key} style={{ width }} className="p-2 border">
                  <div className="h-8 w-3/4 bg-gray-300 animate-pulse rounded"></div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: rows }).map((_, index) => (
              <tr key={index} className="border-t">
                {columns.map(({ key }) => (
                  <td key={key} className="p-2 text-center border">
                    <div className="h-8 w-3/4 bg-gray-200 animate-pulse rounded"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const Table = ({
  columns,
  data,
  pageSize,
  sortableColumns,
  loading,
  search,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  if (loading) return <Skeleton columns={columns} rows={pageSize} />;

  // Sorting function
  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const order = sortConfig.direction === "asc" ? 1 : -1;
    return a[sortConfig.key] > b[sortConfig.key] ? order : -order;
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedData.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = sortedData.slice(startIndex, startIndex + pageSize);

  // Handle sorting
  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <div className="w-full border rounded-lg">
      <div className="overflow-x-auto">
        <div className="min-w-[500px]">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                {columns.map(({ key, label, width }) => (
                  <th
                    key={key}
                    style={{ width }}
                    className={`p-2 border ${
                      sortableColumns.includes(key) ? "cursor-pointer" : ""
                    }`}
                    onClick={() =>
                      sortableColumns.includes(key) && handleSort(key)
                    }
                  >
                    {label}{" "}
                    {sortableColumns.includes(key) &&
                      (sortConfig.key === key
                        ? sortConfig.direction === "asc"
                          ? "▲"
                          : "▼"
                        : "⇅")}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedData.length > 0 ? (
                paginatedData.map((row) => (
                  <tr key={row.id} className="border-t hover:bg-gray-50">
                    {columns.map(({ key }) => (
                      <td key={key} className="p-2 text-center border">
                        {row[key]}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="p-4 text-center text-gray-500"
                  >
                    {search ? "No data matched" : "No data exists"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* Pagination */}
      {paginatedData.length > 0 && (
        <div className="flex justify-end m-2 gap-2">
          <button
            className="px-3 py-1 border rounded disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span className="px-3 py-1">
            {currentPage} / {totalPages}
          </span>
          <button
            className="px-3 py-1 border rounded disabled:opacity-50"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;
