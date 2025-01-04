import { FC, useEffect, useState } from "react";
import { Footer, Header, Pagination, PosterCard } from "../components";
import { getPopularMovie, getTopRateMovie } from "../api";

type MovieResult = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type PageType = {
  page: number;
  total_pages?: number;
};

const ProductPage: FC = () => {
  const [data, setData] = useState<MovieResult[]>([]);
  const [pageResult, setPageResult] = useState<PageType>();
  const [page, setPage] = useState<number>(1);
  const [mode, setMode] = useState<number>(1);
  const weightPopularity = 500;
  const weightVoteAverage = 2000;
  const weightVoteCount = 100;
  const basePrice = 10000;
  const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;

  const listMode = [
    {
      title: "Popular",
      value: 1,
    },
    {
      title: "Top Rate",
      value: 2,
    },
  ];

  useEffect(() => {
    const getData = async () => {
      const response =
        mode === 1 ? await getPopularMovie(page) : await getTopRateMovie(page);
      setData(response.results);
      setPageResult({
        page: response.page,
        total_pages: response.total_pages,
      });
    };

    getData();
  }, [page, mode]);

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
      <Header index={1} />
      <section className="flex-grow flex justify-center items-center">
        <div className="max-w-screen-xl md:px-3">
          <div className="w-full flex justify-center">
            <ul className="inline-flex -space-x-px text-xs md:text-sm">
              {listMode.map((value, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      setPage(1);
                      setMode(value.value);
                    }}
                    className={`flex items-center justify-center px-2 h-6 md:px-3 md:h-8 ${
                      value.value === 1 ? "rounded-s-lg" : "rounded-e-lg"
                    } ${
                      mode === value.value
                        ? "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                        : "leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    } `}
                  >
                    {value.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-3 lg:gap-6 grid-cols-1 lg:grid-cols-2 p-3 lg:py-6 lg:px-0">
            {data.map((value, index) => (
              <PosterCard
                key={index}
                href={`/product/${value.id}`}
                imgUrl={IMAGE_URL + value.poster_path}
                title={value.title}
                price={calculateFilmPrice(
                  value.popularity,
                  value.vote_average,
                  value.vote_count
                )}
                year={value.release_date.split("-")[0]}
                description={value.overview}
              />
            ))}
          </div>
          <Pagination
            page={pageResult ? pageResult.page : 1}
            max={
              pageResult
                ? pageResult.total_pages
                  ? pageResult.total_pages <= 500
                    ? pageResult.total_pages
                    : 500
                  : 1
                : 1
            }
            setCurrent={setPage}
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductPage;
