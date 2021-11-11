import Head from "next/head";
import NextLink from "next/link";
import { InitialGameBtn } from "../components/button/InitialGameBtn";
import { Navbar } from "../components/nav/Navbar";

export default function Home() {
  return (
    <div className="h-screen">
      <Head>
        <title>Battleships</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex flex-col h-5/6 items-center justify-center">
        <section className="w-3/6 h-2/6 flex flex-col justify-center mt-4">
          <NextLink href="/game" passHref>
            <InitialGameBtn text="Nuevo Juego" />
          </NextLink>
          <NextLink href="/config" passHref>
            <InitialGameBtn text="Configurar juego" />
          </NextLink>
        </section>
      </main>
    </div>
  );
}
