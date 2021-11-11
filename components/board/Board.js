import { xMark } from "../../utils/constants/constants";
import { Square } from "../square/Square";

export const Board = (props) => {
  const { board, handleSquareClick, restartGame, isFinished } = props;
  const handleClick = (row, col, square) => {
    if (square !== "missed" && square !== "hitted") {
      if (handleSquareClick) handleSquareClick(row, col);
    }
  };
  return (
    <div className="grid grid-cols-10 grid-rows-10 justify-center">
      {isFinished ? (
        <div className="col-span-10 row-span-10 border">
          <div className="h-full flex flex-col justify-center items-center">
            <h1 className="text-4xl mb-6">¡Juego terminado!</h1>
            <button
              className="shadow-lg bg-green-400 text-white text-bold text-2xl p-4 rounded-2xl"
              onClick={restartGame}
            >
              Intentar de nuevo
            </button>
          </div>
        </div>
      ) : (
        board &&
        board.map((row, x) => {
          return row.map((square, y) => (
            <Square
              key={y}
              row={x}
              col={y}
              square={square}
              onClick={handleClick}
            >
              {(square === "missed" || square === "hitted") && xMark}
            </Square>
          ));
        })
      )}
    </div>
  );
};
