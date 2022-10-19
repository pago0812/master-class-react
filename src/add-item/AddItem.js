import "./AddItem.css";
import { useState } from "react";

export const AddItem = ({ addMyItem }) => {
  const [itemText, setItemText] = useState("");

  const itemTextChange = (event) => {
    setItemText(event.target.value);
  };

  const itemCall = () => {
    addMyItem(itemText);
    setItemText("");
  };

  return (
    <div className="add-item-container">
      <input
        onChange={itemTextChange}
        value={itemText}
        className="input-style"
        type="text"
      />

      <button onClick={itemCall} className="button-style">
        Add
      </button>
    </div>
  );
};
