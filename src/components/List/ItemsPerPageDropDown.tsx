import { useCallback } from "react";
import "./ItemsPerPageDropDown.css";

interface ItemsPerPageDropDownProps {
  itemsPerPage: number;
  setItemsPerPage: (itemsPerPage: number) => void;
  itemsName: string;
}

const ItemsPerPageDropDown = ({
  itemsPerPage,
  setItemsPerPage,
  itemsName = "items",
}: ItemsPerPageDropDownProps) => {
  const memoizedOnChange = useCallback(
    (event) => {
      setItemsPerPage(event.target.value);
    },
    [setItemsPerPage]
  );

  return (
    <div className="form-floating items-per-page">
      <select
        id="itemsPerPageDropDown"
        value={itemsPerPage}
        onChange={memoizedOnChange}
        className="form-select"
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
      <label htmlFor="itemsPerPageDropDown">{itemsName} per page:</label>
    </div>
  );
};

export default ItemsPerPageDropDown;
