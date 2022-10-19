import "./ItemList.css";
import { Item } from "../item/Item";

export const ItemList = ({ items, updateCheck, removeItem }) => {
  return (
    <div className="item-list-container">
      {items.map((i, n) => (
        <Item
          key={n}
          index={n}
          name={i.name}
          check={i.check}
          removeItem={removeItem}
          updateCheck={updateCheck}
        ></Item>
      ))}
    </div>
  );
};
