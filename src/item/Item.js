import "./Item.css";

export const Item = ({ name, check, index, updateCheck, removeItem }) => {
  return (
    <div className="">
      <div onClick={() => removeItem(index)} className="check-box">
        R
      </div>
      <div
        onClick={() => updateCheck(index)}
        className={check ? "check-box green" : "check-box gray"}
      ></div>
      <span>{name}</span>
    </div>
  );
};
