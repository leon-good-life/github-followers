import ListItem from "./SimpleListItem";
import { ItemData } from "./interfaces";

interface ListProps {
  itemsToRender: ItemData[];
  onItemClick: (itemData: ItemData) => void;
}

const SimpleList = ({ itemsToRender, onItemClick }: ListProps) => {
  return (
    <ul className="list-group">
      {itemsToRender.map((itemData: ItemData) => (
        <ListItem key={itemData.key} {...{ itemData, onItemClick }} />
      ))}
    </ul>
  );
};

export default SimpleList;
