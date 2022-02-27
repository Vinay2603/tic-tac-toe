import "./Square.css";

export const Square = ({ value, changeValue, index }) => {
  return (
    <div
      onClick={() => {
        changeValue(index);
      }}
      className="inbox"
    >
      {value}
    </div>
  );
};
