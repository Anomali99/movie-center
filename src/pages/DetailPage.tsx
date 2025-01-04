import { FC, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDetailMovie } from "../api";
import { Footer, Header } from "../components";

type ParamsType = { id: string };

type GenreType = {
  id: number;
  name: string;
};

type ProductionCompaniesType = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

type MovieDetailResponseType = {
  adult: boolean;
  backdrop_path: string;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  budget: number;
  origin_country: string[];
  genres: GenreType[];
  production_companies: ProductionCompaniesType[];
};

const DetailPage: FC = () => {
  const { id } = useParams<ParamsType>();
  const [data, setData] = useState<MovieDetailResponseType>();
  const navigate = useNavigate();
  const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;
  const weightPopularity = 500;
  const weightVoteAverage = 2000;
  const weightVoteCount = 100;
  const basePrice = 10000;

  const productId = Number(id);

  useEffect(() => {
    const getData = async () => {
      const response = await getDetailMovie(productId);
      setData(response);
    };

    if (isNaN(productId)) {
      navigate("/product");
    }

    getData();
  }, [productId, navigate]);

  const calculateFilmPrice = (
    popularity: number,
    voteAverage: number,
    voteCount: number
  ): string => {
    const price =
      basePrice +
      weightPopularity * popularity +
      weightVoteAverage * voteAverage +
      weightVoteCount * Math.sqrt(voteCount);

    const formattedPrice = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(Math.round(price));

    return `${formattedPrice},-`;
  };

  return (
    <>
      <Header index={3} />
      <section className="flex-grow flex justify-center mb-1">
        <div className="w-full h-full flex flex-col items-center">
          <div className="relative w-full h-[70vh]">
            <img
              className="w-full h-full object-cover"
              src={IMAGE_URL + data?.backdrop_path}
              alt="bg"
            />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-white"></div>
          </div>
          <div className="group w-5/6 lg:w-full relative rounded-lg shadow bg-gray-100 max-w-screen-xl -mt-64 z-10 md:mx-3 cursor-pointer hover:scale-110 hover:z-30">
            <div className="flex flex-col items-center lg:items-start lg:flex-row">
              <img
                className="w-64 rounded-lg -mt-44 lg:mt-0"
                src={IMAGE_URL + data?.poster_path}
                alt="poster"
              />
              <div className="w-full lg:h-full p-6 gap-2">
                <h1 className="text-2xl lg:text-5xl font-bold">
                  {data?.title}
                </h1>
                <h3 className="text-md lg:text-xl">{data?.tagline}</h3>
                <div className="flex flex-row gap-1 mt-3">
                  {data?.genres.map((value, index) => (
                    <p
                      key={index}
                      className="px-2 py-1 rounded-md bg-primary-500 text-white"
                    >
                      {value.name}
                    </p>
                  ))}
                </div>
                <p className="text-sm lg:text-base text-gray-700 w-full lg:w-5/6 mt-3">
                  {data?.overview}
                </p>
                <div className="w-full lg:w-5/6 mt-3">
                  <p className="font-bold">Perusahaan Produksi</p>
                  <div className="relative w-full grid gap-1 grid-cols-5">
                    {data?.production_companies.length === 0 ? (
                      <p className="absolute text-center text-gray-400">
                        Tidak ada data perusahaan.
                      </p>
                    ) : (
                      data?.production_companies.map((value, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 p-3 bg-primary-400 rounded-lg hover:w-max hover:bg-primary-500 hover:z-40 hover:shadow-lg duration-300 shadow-md transition-shadow"
                        >
                          {value.logo_path === null ? (
                            <div className="w-7 h-7 px-2 flex justify-center items-center text-white font-bold text-lg rounded-full bg-primary-300">
                              {value.name ? value.name[0] : "?"}
                            </div>
                          ) : (
                            <img
                              className="w-7 h-7 object-contain rounded-full bg-primary-300"
                              src={IMAGE_URL + value.logo_path}
                              alt={`Logo ${value.name}`}
                            />
                          )}
                          <p className="text-white font-semibold text-lg truncate">
                            {value.name}
                          </p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
              <h5 className="text-sm lg:text-lg font-semibold text-white px-4 py-2 bg-primary-600 rounded-tl-lg rounded-br-lg absolute bottom-0 right-0 inline-block">
                {data
                  ? calculateFilmPrice(
                      data.popularity,
                      data.vote_average,
                      data.vote_count
                    )
                  : ""}
              </h5>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DetailPage;
