import useData from "./useData";

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
  return useData<Genre>("/genres");
};

export default useGames;
