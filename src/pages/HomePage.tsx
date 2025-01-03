import { FC } from "react";
import { Footer, Header } from "../components";
import { streaming } from "../assets";

const HomePage: FC = () => {
  return (
    <>
      <Header index={0} />
      <section className="flex-grow flex justify-center items-center">
        <div className="flex flex-col lg:flex-row mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 gap-6">
          <div className="w-full flex flex-col justify-center">
            <h1 className="font-bold text-4xl lg:text-6xl text-primary-600">
              Movie Center
            </h1>
            <h2 className="mt-2 lg:mt-4 font-bold lg:text-5xl text-primary-500">
              Film Favoritmu, <br className="hidden lg:block" />
              Selamanya Milikmu.
            </h2>
            <p className="mt-3 lg:mt-6 lg:text-xl">
              Platform pembelian film digital yang memungkinkan Anda untuk
              memiliki film favorit anda selamanya. Dengan berbagai pilihan
              genre dan judul terbaru, Movie Center hadir untuk memberikan
              pengalaman koleksi film yang mudah, aman, dan nyaman.
            </p>
            <div className="mt-2.5 lg:mt-5 grid gap-4 grid-cols-2 w-max">
              <a
                href="/product"
                className="text-sm lg:text-lg bg-primary-600 hover:bg-primary-500 border-2 border-primary-600 text-white font-semibold px-3 py-1 rounded-lg"
              >
                Beli Sekarang
              </a>
              <a
                href="/about"
                className="text-sm lg:text-lg border-2 border-primary-400 font-semibold px-3 py-1 rounded-lg hover:bg-primary-100"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
          <div className="w-full flex justify-end lg:justify-center">
            <img
              className="w-3/4 lg:w-full object-contain"
              src={streaming}
              alt="streaming"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
