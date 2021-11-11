import _ from "lodash";
import { useEffect, useState } from "react";
import { Board } from "../../components/board/Board";
import { Navbar } from "../../components/nav/Navbar";
import { Scores } from "../../components/scores/Scores";
import { createBoard } from "../../utils/board/createBoard";
import { shipsTypes } from "../../utils/constants/shipsTypes";
import { makeClone } from "../../utils/makeClone";
import { store } from "../../redux/store/store";
import { Modal } from "../../components/modal/Modal";
import Head from "next/head";
import { addBoard } from "../../redux/actions/addBoard";
import { SaveBtn } from "../../components/button/SaveBtn";

const Game = () => {
  const [showModal, setShowModal] = useState(false);
  const [tempAttempts, setTempAttempts] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [state, setState] = useState({
    board: null,
    fleet: null,
    shots: 0,
    hits: 0,
    maxHits: 0,
  });
  useEffect(() => {
    startGame();
  }, []);

  const handleSquareClick = (x, y) => {
    let newBoard = makeClone(state.board);
    let shots = state.shots + 1;
    let hits = state.hits;
    let newFleet = [...state.fleet];
    let cellValue = state.board[x][y];
    if (cellValue >= 100) {
      const index = newFleet.findIndex((ship) => ship.id === cellValue / 100);
      newFleet[index].hits = newFleet[index].hits + 1;
      newBoard[x][y] = "hitted";
      hits += 1;
      setState({
        board: newBoard,
        hits: hits,
        shots,
        fleet: newFleet,
        maxHits: state.maxHits,
      });
    } else {
      newBoard[x][y] = "missed";
      setState({
        board: newBoard,
        shots,
        fleet: state.fleet,
        hits: state.hits,
        maxHits: state.maxHits,
      });
    }
    const totalHits = newFleet.map((ship) => ship.hits).reduce((a, b) => a + b);
    const totalHitPoints = newFleet
      .map((ship) => ship.hitPoints)
      .reduce((a, b) => a + b);
    if (shots >= state.maxHits || totalHits === totalHitPoints) {
      setIsFinished(true);
      store.dispatch(addBoard(state.board));
    }
  };

  const startGame = () => {
    const difficulty = store.getState().difficulty;
    let maxHits = 0;
    if (difficulty === "other") {
      setShowModal(true);
    } else if (difficulty === "hard") {
      maxHits = 50;
    } else {
      maxHits = 100;
    }
    setIsFinished(false);
    const fleet = _.cloneDeep(shipsTypes);
    const board = createBoard();
    setState({
      board,
      fleet,
      shots: 0,
      hits: 0,
      maxHits: maxHits,
    });
  };
  const restartGame = () => {
    startGame();
  };

  const handleSave = () => {
    setState({
      board: state.board,
      fleet: state.fleet,
      hits: state.hits,
      shots: state.shots,
      maxHits: tempAttempts,
    });
    setShowModal(false);
  };

  return (
    <>
      <Head>
        <title>Juego</title>
      </Head>
      <Navbar />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title="Ingresa la cantidad de turnos"
        saveBtn={<SaveBtn onClick={handleSave} />}
      >
        <input
          autoFocus
          className="border p-3 rounded-xl w-full"
          onChange={(e) => setTempAttempts(e.target.value)}
          type="number"
        />
      </Modal>
      {state.maxHits > 0 && (
        <main className="flex flex-col lg:flex-row w-full sm:items-center justify-center mt-4">
          <Scores
            fleet={state.fleet}
            maxHits={state.maxHits}
            shots={state.shots}
          />
          <Board
            isFinished={isFinished}
            board={state.board}
            handleSquareClick={handleSquareClick}
            restartGame={restartGame}
          />
        </main>
      )}
    </>
  );
};

export default Game;
