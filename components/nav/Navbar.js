import NextLink from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-blue-400 w-auto h-14 flex items-center px-4 text-white">
      <NextLink href="/">
        <h1 className="font-bold cursor-pointer">BattleShips</h1>
      </NextLink>
      <NextLink href="/games">
        <h1 className="ml-4 text-gray-300 font-bold cursor-pointer">Juegos</h1>
      </NextLink>
      <NextLink href="/config">
        <div className="ml-auto cursor-pointer">Configurar</div>
      </NextLink>
    </nav>
  );
};
