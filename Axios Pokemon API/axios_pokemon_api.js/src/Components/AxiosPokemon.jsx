import React, { useState } from 'react';
import axios from 'axios';

const AxiosPokemon = (props) => {
    const [ pokemon, setPokemon ] = useState([]);

    const pokeBall = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then(response => setPokemon(response.data.results));
    };

    return(
        <div>
            <button onClick={pokeBall} >Fetch Pokémon</button>
            {pokemon.map((pika, i) => {
                return(
                    <p key={i}>{pika.name}</p>
                )
            })}
        </div>
    )
}

export default AxiosPokemon;