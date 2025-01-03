import axios, { AxiosResponse, AxiosInstance } from "axios";

const BASE_API = import.meta.env.VITE_BASE_API;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

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

type MovieListResponseType = {
  page: number;
  results: MovieResult[];
  total_pages?: number;
  total_results?: number;
};

const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_API,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

const getListMovie = async (
  path: string,
  page: number = 1,
  language: string = "en-US"
): Promise<MovieListResponseType> => {
  try {
    const response: AxiosResponse<MovieListResponseType> = await apiClient.get(
      path,
      {
        params: { language, page },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.message);
    } else {
      console.error("Unexpected Error:", error);
    }
    throw new Error("Failed to fetch popular movies");
  }
};

const getPopularMovie = async (
  page: number = 1,
  language: string = "en-US"
): Promise<MovieListResponseType> => {
  const response = await getListMovie("/popular", page, language);
  return response;
};

const getTopRateMovie = async (
  page: number = 1,
  language: string = "en-US"
): Promise<MovieListResponseType> => {
  const response = await getListMovie("/top_rated", page, language);
  return response;
};

export { getPopularMovie, getTopRateMovie };
