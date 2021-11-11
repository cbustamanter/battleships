export const Square = (props) => {
  const { row, col, square, onClick, children } = props;

  return (
    <div
      role="square"
      onClick={() => onClick(row, col, square)}
      className={`${
        square === "missed"
          ? "bg-green-300"
          : square === "hitted"
          ? "bg-red-300"
          : ""
      } border-2 border-gray-500 border-opacity-25 cursor-pointer square`}
    >
      {children}
    </div>
  );
};
