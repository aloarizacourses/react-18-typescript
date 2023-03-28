import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

interface FetchGenresResponse {
  results: Genre[];
}

const useGames = () => {
  return { data: genres, isLoading: false, error: null };
};

export default useGames;
