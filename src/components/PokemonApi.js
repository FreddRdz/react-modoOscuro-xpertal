import React from "react";
import useGetApi from "../hooks/useGetApi";

const apiPokemon = "https://pokeapi.co/api/v2/pokemon";

export const PokemonApi = () => {
  const [pokemonesEncontrados] = useGetApi(apiPokemon);

  console.log(pokemonesEncontrados);
  return (
    <>
      <div>PokemonApi</div>
      <ul>
        {pokemonesEncontrados.map((pokemon, i) => {
          return (
            <li key={i}>
              <strong>Nombre:</strong> {pokemon.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};
