import Head from "next/head";
import Header from "../components/Header/Header";
import hpIcon from "../public/icon-hp-lens.jpg";
import logo from "../public/logo.png";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Head>
        <title>Italica RP</title>
        <meta name="description" content="Italica roleplay" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className="h-screen w-screen bg-white">
        <div className="w-full h-60">
          <Header />
          <section className="relative z-10 flex items-center mx-auto justify-between p-40 h-60 mt-40 ">
            <div className="flex flex-col max-w-lg gap-8">
              <h1 className="text-white font-bold text-6xl">
                BENVENUTO SU{" "}
                <span className="text-button-light-blue-primary">
                  ITALICA RP
                </span>
              </h1>
              <p className="max-w-1 text-gray-300">
                Benvenuti giovani maghi nel mondo di Italica RP, la prima
                community magica italiana ambientata nel fantastico mondo di
                Harry Potter. Il roleplay abbinato alla vostra immaginazione
                garantiranno un’immersione unica! Inizia la tua esperienza nella
                Scuola di Magia e Stregoneria di Italica vestendo i panni di un
                giovane mago e/o strega.
              </p>
              <button className="p-4 bg-button-light-blue-primary rounded max-w-[200px] hover:border-white hover:border-2">
                <p className="font-bold text-white"> Entra subito </p>
              </button>
            </div>
            <Image src={logo} height={300} className="mt-0 animate-bounce" />
          </section>
          <video
            autoPlay
            muted
            loop
            className="-z-1 absolute top-0 left-0 w-full h-full block object-cover"
            src={require("../public/videobg.mp4")}
          ></video>
        </div>
      </main>

      <div className="flex justify-between p-8">
        <div className="w-1/2">ESPLORA E VIVI LA SCUOLA</div>
        <div className="bg-button-light-blue-primary w-1/2 items-center">
          <Image
            src={logo}
            height={300}
            className="w-1/2 items-center flex justify-center"
          />
        </div>
      </div>
      <div className="flex justify-between p-8">
        <div className="bg-button-light-blue-primary w-1/2 items-center">
          <Image
            src={logo}
            height={300}
            className="w-1/2 items-center flex justify-center"
          />
        </div>
        <div className="w-1/2">ESPLORA LA MAPPA</div>
      </div>
      <div className="flex justify-between p-8">
        <div className="w-1/2">SCEGLI DA CHE PARTE STARE</div>
        {/* TODO: IMPLEMENTARE LOGICA CAROSELLI CON AUTOPLAY AND PAUSE ON HOVER */}
        <div className="bg-button-light-blue-primary w-1/2 items-center">
          <Image
            src={logo}
            height={300}
            className="w-1/2 items-center flex justify-center"
          />
        </div>
      </div>

      {/* //TODO: IMPLEMENTARE FAQ CON ACCORDION */}
      <div className="flex justify-center p-8 bg-black">
        <p className="text-white">FAQ</p>
      </div>
      {/* //TODO: IMPLEMENTARE SOCIAL */}
      <div className="flex justify-center p-8 bg-violet-600">
        <p className="text-white">SEGUICI SUI SOCIAL</p>
      </div>
    </>
  );
};

export default Home;
