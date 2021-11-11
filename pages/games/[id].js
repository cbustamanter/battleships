import { useRouter } from "next/dist/client/router";
import { Board } from "../../components/board/Board";
import { Navbar } from "../../components/nav/Navbar";
import { store } from "../../redux/store/store";
import Head from "next/head";
const HistoricGame = () => {
  const router = useRouter();
  const { id } = router.query;
  const board = store.getState().board[id - 1];
  return (
    <>
      <Head>
        <title>Lista de juegos</title>
      </Head>
      <Navbar />
      <main className="flex justify-center my-4">
        <h1 className="font-bold text-4xl text-gray-600">
          Tablero del juego {id}
        </h1>
      </main>
      <Board board={board} />
    </>
  );
};

export default HistoricGame;
