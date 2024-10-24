interface NavBarProps {
  pokemonList: PokemonList[];
  setPokemonIndex: (index: number) => void;
}

interface PokemonList {
  name: string;
  imgSrc?: string;
}

const NavBar = ({ setPokemonIndex, pokemonList }: NavBarProps) => {
  const handleClick = (index: number) => {
    setPokemonIndex(index);
    if (pokemonList[index].name === "pikachu") {
      alert("pika pikachu !!!");
    }
  };

  return (
    <div className="navbar">
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => handleClick(index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
};

export default NavBar;
