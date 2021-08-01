/**
 * The function slices the array of all items
 * and returns only the relavant items to render
 * for the currentPageIndex in the pagination.
 *
 * @param {any[]} allItemsArray
 * @param {positive integer} currentPageIndex
 * @param {positive integer} itemsPerPage
 * @returns pageItemsArray - A slice of allItemsArray
 */
export const allItemsArrayToPageItemsArray = (
  allItemsArray,
  currentPageIndex,
  itemsPerPage
) => {
  const beginIndex = (currentPageIndex - 1) * itemsPerPage;
  const endIndex = currentPageIndex * itemsPerPage;
  return allItemsArray.slice(beginIndex, endIndex);
};
