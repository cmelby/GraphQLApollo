import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Pokemon } from '../components/Pokemon'

export function PokemonsContainer() {
    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        varibles: { first: 9 }
    }); 
    return (
        <div className = "container">
            {pokemons && pokemons.map(pokemon => 
                    <Pokemon 
                        key={pokemon.id} 
                        pokemon={pokemon} 
                    />)}
        </div> 
    );
}

// 1) go ahead and add a key to the pokemon component
// 2) go ahead and pass a prop of 'pokemon'