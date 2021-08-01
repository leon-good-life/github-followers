import ListItem from "./ListItem";

const List = ({ itemsToRender, onItemClick }) => {
  return (
    <ul className="list-group mt-3">
      {itemsToRender.map((itemData) => (
        <ListItem key={itemData.key} {...{ itemData, onItemClick }} />
      ))}
    </ul>
  );
};

export default List;
