import { setDifficulty } from "../../redux/actions/setDifficulty";
import { store } from "../../redux/store/store";
import { DifficultyBtn } from "../button/DifficultyBtn";

export const ConfigComponent = () => {
  const handleChoose = (e) => {
    const difficulty = e.target.name;
    store.dispatch(setDifficulty(difficulty));
  };
  return (
    <main className="flex flex-col h-2/4 items-center mt-4">
      <section>
        <h1 className="font-bold text-3xl text-gray-600 text-center">
          Selecciona el nivel de dificultad
        </h1>
      </section>
      <section className="w-3/6 h-2/6 flex flex-col justify-center mt-4">
        <DifficultyBtn
          name="easy"
          text="Fácil"
          onClick={(e) => handleChoose(e)}
        />
        <DifficultyBtn
          name="medium"
          text="Medio"
          onClick={(e) => handleChoose(e)}
        />
        <DifficultyBtn
          name="hard"
          text="Difícil"
          onClick={(e) => handleChoose(e)}
        />
        <DifficultyBtn
          name="other"
          text="Otro"
          onClick={(e) => handleChoose(e)}
        />
      </section>
    </main>
  );
};
