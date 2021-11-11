import { ConfigComponent } from "../../components/config/ConfigComponent";
import { Navbar } from "../../components/nav/Navbar";
import Head from "next/head";

const Config = () => {
  return (
    <>
      <Head>
        <title>Configuración</title>
      </Head>
      <Navbar />
      <ConfigComponent />
    </>
  );
};

export default Config;
