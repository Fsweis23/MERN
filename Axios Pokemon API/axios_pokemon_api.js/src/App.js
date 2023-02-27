import React from 'react';
import './App.css';
import AxiosPokemon from './Components/AxiosPokemon';

function App() {
  return (
    <div className="App">
        <h1>Pokémon</h1>
        <h1>Gotta Fetch 'Em All</h1>
      <AxiosPokemon />
    </div>
  );
}

export default App;