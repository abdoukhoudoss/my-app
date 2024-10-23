import React from 'react';

interface Pokemon {
    imgSrc?: string; 
    name: string;    
}

interface PokemonCardProps {
    pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => { 
    return (
        <figure>
            {pokemon.imgSrc 
                ? <img src={pokemon.imgSrc} alt={pokemon.name} />
                : <p>???</p>
            }
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
};

export default PokemonCard;
