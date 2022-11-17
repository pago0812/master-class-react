import "./App.css";
import { useState } from "react";

import { Header } from "./header/Header";
import { AddItem } from "./add-item/AddItem";
import { ItemList } from "./item-list/ItemList";

function App() {
  const [items, setItems] = useState([]);

  const addMyItem = (newItem) => {
    setItems([...items, ...[{ name: newItem, check: false }]]);
  };

  const updateCheck = (n) => {
    setItems(
      items.map((i, p) => {
        return p === n ? { name: i.name, check: !i.check } : i;
      })
    );
  };

  const removeItem = (n) => {
    setItems(items.splice(n));
  };

  return (
    <div className="main-component">
      <Header></Header>
      <p>Pony macho is here</p>
      <AddItem addMyItem={addMyItem}></AddItem>
      <ItemList
        updateCheck={updateCheck}
        removeItem={removeItem}
        items={items}
      ></ItemList>
    </div>
  );
}

export default App;
