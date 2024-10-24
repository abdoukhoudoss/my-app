import { useState, useEffect } from 'react';
import PokemonCard from './components/PokemonCard';
import NavBar from './components/NavBar';

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
      name: "mew",
  },
];

const App = () => {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []); 

  const handlePrevious = () => {
    setPokemonIndex((prevIndex) => Math.max(prevIndex - 1, 0)); 
  };

  const handleNext = () => {
    setPokemonIndex((prevIndex) => Math.min(prevIndex + 1, pokemonList.length - 1));
  };

  return (
    <div>
      <h1>Pokemon</h1>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <NavBar onPrevious={handlePrevious} onNext={handleNext} pokemonList={pokemonList} setPokemonIndex={setPokemonIndex} />
    </div>
  );
};

export default App;
