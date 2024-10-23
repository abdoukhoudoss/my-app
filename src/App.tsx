import './App.css';
import PokemonCard from './components/PokemonCard';

import React, { useState } from 'react';

const App = () => {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const pokemonList = [
      { imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png', name: 'Pikachu' },
      { imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png', name: 'Bulbasaur' },
      { imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png', name: 'Charmander' },
      { imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png', name: 'quirtle'},
      { imgSrc: '', name:'mew'},
  ];

  const handlePrevious = () => {
      setPokemonIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : pokemonList.length - 1));
  };

  const handleNext = () => {
      setPokemonIndex((prevIndex) => (prevIndex < pokemonList.length - 1 ? prevIndex + 1 : 0));
  };

  return (
      <div>
          <h1>Pokémon</h1>
          <PokemonCard pokemon={pokemonList[pokemonIndex]} />
          <div>
              <button onClick={handlePrevious}>Précédent</button>
              <button onClick={handleNext}>Suivant</button>
          </div>
      </div>
  );
};

export default App;
