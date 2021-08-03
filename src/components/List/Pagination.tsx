import PaginationPage from "./PaginationPage";

interface PaginationProps {
  allItemsLength: number;
  itemsPerPage: number;
  onPageSelect: (selectedPage: number) => void;
  selectedPageIndex: number;
  itemsName: string;
}

const Pagination = ({
  allItemsLength,
  itemsPerPage,
  onPageSelect,
  selectedPageIndex,
  itemsName = "items",
}: PaginationProps) => {
  if (allItemsLength < itemsPerPage) {
    return (
      <nav>
        Showing all the {itemsName}. Total {allItemsLength} {itemsName}.
      </nav>
    );
  }
  const pagesCount = Math.round(allItemsLength / itemsPerPage);
  const pages = [];
  for (let pageIndex = 1; pageIndex <= pagesCount; pageIndex++) {
    pages.push(
      <PaginationPage
        key={pageIndex}
        {...{ pageIndex, selectedPageIndex, onPageSelect }}
      />
    );
  }
  return (
    <nav>
      <ul className="pagination">{pages}</ul>
    </nav>
  );
};

export default Pagination;
