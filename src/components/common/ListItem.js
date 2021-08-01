import { useCallback } from "react";

const ListItem = ({ itemData, onItemClick }) => {
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

export default ListItem;
