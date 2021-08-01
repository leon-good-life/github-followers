import PaginationPage from "./PaginationPage";

const Pagination = ({
  allItemsLength,
  itemsPerPage,
  onPageSelect,
  selectedPageIndex,
}) => {
  if (allItemsLength < itemsPerPage) {
    return null;
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
    <nav className="mt-3 mb-5">
      <ul className="pagination">{pages}</ul>
    </nav>
  );
};

export default Pagination;
