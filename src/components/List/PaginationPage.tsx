import { useCallback } from "react";
import classNames from "classnames";

interface PaginationPageProps {
  pageIndex: number;
  selectedPageIndex: number;
  onPageSelect: (pageIndex: number) => void;
}

const PaginationPage = ({
  pageIndex,
  selectedPageIndex,
  onPageSelect,
}: PaginationPageProps) => {
  const memoizedOnClick = useCallback(() => {
    onPageSelect(pageIndex);
  }, [pageIndex, onPageSelect]);

  const liClassName = classNames("page-item", {
    active: selectedPageIndex === pageIndex,
  });

  return (
    <li className={liClassName}>
      <button className="page-link" onClick={memoizedOnClick}>
        {pageIndex}
      </button>
    </li>
  );
};

export default PaginationPage;
