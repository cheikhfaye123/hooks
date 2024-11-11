
import React from 'react';
import useCustomHook from './hooks/useCustomHook';

const App = () => {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const { data: pokemonData, loading: loadingPokemon } = useCustomHook(urlPokemon);
  const { data: rickData, loading: loadingRick } = useCustomHook(urlRick);

  if (loadingPokemon || loadingRick) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Personaje Pokemon</h2>
      <p>{pokemonData?.name}</p>
      <img src={pokemonData?.sprites?.front_default} alt={pokemonData?.name} />

      <h2>Personaje Rick and Morty</h2>
      <p>{rickData?.name}</p>
      <img src={rickData?.image} alt={rickData?.name} />
    </div>
  );
};

export default App;
