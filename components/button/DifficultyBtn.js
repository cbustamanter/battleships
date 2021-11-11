import { useState } from "react";
import { store } from "../../redux/store/store";
export const DifficultyBtn = (props) => {
  const { text, ...rest } = props;
  const [difficulty, setDifficulty] = useState(store.getState().difficulty);
  store.subscribe(() => setDifficulty(store.getState().difficulty));

  return (
    <button
      className={`${
        rest.name === difficulty
          ? "bg-green-400 hover:bg-green-400"
          : "bg-yellow-400"
      } hover:bg-green-400 text-white rounded-3xl w-auto h-16 text-2xl mt-4`}
      {...rest}
    >
      {text}
    </button>
  );
};
