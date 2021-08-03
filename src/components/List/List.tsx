import React, { useState } from "react";
import SimpleList from "./SimpleList";
import Pagination from "./Pagination";
import ItemsPerPageDropDown from "./ItemsPerPageDropDown";
import { ItemData } from "./interfaces";

/**
 * The function slices the array of all items
 * and returns only the relavant items to render
 * for the currentPageIndex in the pagination.
 *
 * @param {ItemData[]} allItemsArray
 * @param {number} currentPageIndex
 * @param {number} itemsPerPage
 * @returns pageItemsArray - A slice of allItemsArray
 */
export const allItemsArrayToPageItemsArray = (
  allItemsArray: ItemData[],
  currentPageIndex: number,
  itemsPerPage: number
) => {
  const beginIndex = (currentPageIndex - 1) * itemsPerPage;
  const endIndex = currentPageIndex * itemsPerPage;
  return allItemsArray.slice(beginIndex, endIndex);
};

interface ListProps {
  allItems: ItemData[];
  onItemClick: (itemData: ItemData) => void;
  onSort: () => void;
  itemsName: string;
}

const List = ({
  allItems,
  onItemClick,
  onSort,
  itemsName = "items",
}: ListProps) => {
  const [selectedPageIndex, setSelectedPageIndex] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const itemsToRender: ItemData[] = allItemsArrayToPageItemsArray(
    allItems,
    selectedPageIndex,
    itemsPerPage
  );
  return (
    <React.Fragment>
      <button className="btn btn-secondary mt-3 mb-1" onClick={onSort}>
        Sort by name &darr; &uarr;
      </button>
      <SimpleList {...{ itemsToRender, onItemClick }} />
      <div className="d-flex justify-content-between mt-3">
        <Pagination
          allItemsLength={allItems.length}
          itemsPerPage={itemsPerPage}
          onPageSelect={setSelectedPageIndex}
          selectedPageIndex={selectedPageIndex}
          itemsName={itemsName}
        />
        <ItemsPerPageDropDown
          {...{ itemsPerPage, setItemsPerPage, itemsName }}
        />
      </div>
    </React.Fragment>
  );
};

export default List;
