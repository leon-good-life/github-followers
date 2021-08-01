import { useCallback } from "react";
import classNames from "classnames";

const PaginationPage = ({ pageIndex, selectedPageIndex, onPageSelect }) => {
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
