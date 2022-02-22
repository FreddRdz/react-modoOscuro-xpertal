import axios from "axios";
import { useEffect, useState } from "react";

const useGetApi = (api) => {
  const [pokemones, setPokemones] = useState([]);
  useEffect(
    () =>
      axios.get(api).then((res) => {
        setPokemones(res.data.results);
      }),
    []
  );

  return [pokemones];
};

export default useGetApi;
