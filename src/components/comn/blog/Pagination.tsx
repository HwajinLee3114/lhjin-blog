"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface PaginationProps {
  currPage: number;
  totalPages: number;
  perPage: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  currPage,
  totalPages,
  perPage,
}) => {
  const router = useRouter();
  const serachParams = useSearchParams();
  const currCtg = serachParams.get("ctg") || "";

  const pageArrowHandler = (type: string) => {
    if (type === "prev") {
      router.push(`?page=${currPage - 1}${currCtg ? `&ctg=${currCtg}` : ""}`);
    } else if (type === "next") {
      router.push(`?page=${currPage + 1}${currCtg ? `&ctg=${currCtg}` : ""}`);
    }
  };

  const pageHandler = (page: number) => {
    router.push(`?page=${page}${currCtg ? `&ctg=${currCtg}` : ""}`);
  };

  const pages = Array.from({ length: totalPages }).map((_, index) => index + 1);
  return (
    <div className="flex gap-2 justify-center items-center mx-auto">
      <button
        className={`${currPage === 1 ? "hidden" : "visible"}`}
        onClick={() => pageArrowHandler("prev")}
      >
        ◀
      </button>
      {pages?.map((page) => {
        const selected = page === currPage;

        return (
          <div
            key={page}
            className={`cursor-pointer border-2 px-4 py-2 rounded-full l_hover-custom ${selected ? "selected" : ""}`}
            onClick={() => pageHandler(page)}
          >
            {page}
          </div>
        );
      })}
      <button
        className={`${currPage === totalPages ? "hidden" : "visible"}`}
        onClick={() => pageArrowHandler("next")}
      >
        ▶
      </button>
    </div>
  );
};
