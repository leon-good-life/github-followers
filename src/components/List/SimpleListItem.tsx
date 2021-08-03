import { useCallback } from "react";
import { ItemData } from "./interfaces";

interface SimpleListItemProps {
    itemData: ItemData;
    onItemClick: (itemData: ItemData) => void;
}

const SimpleListItem = ({ itemData, onItemClick }: SimpleListItemProps) => {
  const memoizedOnClick = useCallback(() => {
    onItemClick(itemData);
  }, [itemData, onItemClick]);

  return (
    <li
      className="list-group-item list-group-item-action cursor-pointer"
      onClick={memoizedOnClick}
    >
      {itemData.displayName}
    </li>
  );
};

export default SimpleListItem;
