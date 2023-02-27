import React from 'react';
import './App.css';
import FetchPokemon from './Components/FetchPokemon'

function App() {
    return (
    <div className="App">
        <h1>Pokémon</h1>
        <h1>Gotta Fetch 'Em All</h1>
        <FetchPokemon />
    </div>
    );
}

export default App;