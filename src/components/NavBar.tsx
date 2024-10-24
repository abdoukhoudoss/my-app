interface NavBarProps {
  pokemonList: PokemonList[]
  setPokemonIndex: (index: number) => void
}

interface PokemonList {
  name: string,
  imgSrc?: string
}

const NavBar = ({ setPokemonIndex, pokemonList }: NavBarProps) => {
  return (
    <div className="navbar">
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => setPokemonIndex(index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
};
export default NavBar;
