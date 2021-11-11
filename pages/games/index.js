import { Navbar } from "../../components/nav/Navbar";
import { store } from "../../redux/store/store";
import NextLink from "next/link";
import Head from "next/head";

const Games = () => {
  const boards = store.getState().board;
  return (
    <>
      <Head>
        <title>Lista de juegos</title>
      </Head>
      <Navbar />
      <main className="flex flex-col items-center mt-4">
        <div>
          <h1 className="font-bold text-4xl text-gray-600">
            Juegos terminados
          </h1>
          {!!boards.length &&
            boards.map((b, idx) => (
              <div key={idx} className="w-full mt-4">
                <h2 className="text-xl">Juego {idx + 1}</h2>
                <div className="h-80 w-full border bg-gray-300 relative rounded">
                  <div className="absolute left-28 top-32 shadow-lg">
                    <NextLink href={`/games/${idx + 1}`}>
                      <button className="bg-green-400 text-white p-4 rounded-xl font-bold">
                        Ver juego
                      </button>
                    </NextLink>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </main>
    </>
  );
};

export default Games;
