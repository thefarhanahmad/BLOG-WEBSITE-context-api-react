import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

const Pagination = () => {
  const { page, getData, totalPages,darkMode } = useContext(BlogContext);
  console.log(page);

  function pre() {
    getData(page - 1);
  }
  function next() {
    getData(page + 1);
  }

  return (
    <div className={`border-t-2 shadow-md h-10 w-full fixed bottom-0 ${darkMode ? 'bg-black text-white':'bg-white text-black'}`}>
      <div className=" w-1/2 m-auto h-full items-center flex justify-between">
        {page === 1 && (
          <button onClick={next} className="border rounded px-2 cursor-pointer">
            next
          </button>
        )}
        {page === totalPages && (
          <button onClick={pre} className="border rounded px-2 cursor-pointer">
            pre
          </button>
        )}

        {page != 1 && page != totalPages && (
          <div className="flex gap-2">
            <button
              onClick={pre}
              className="border rounded px-2 cursor-pointer"
            >
              pre
            </button>
            <button
              onClick={next}
              className="border rounded px-2 cursor-pointer"
            >
              next
            </button>
          </div>
        )}

        <div className="flex gap-1">
          <span> Page {page}</span>
          <span>of {totalPages}</span>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
