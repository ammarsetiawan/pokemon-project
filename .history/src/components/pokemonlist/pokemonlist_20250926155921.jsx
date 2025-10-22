// src/components/pokemonlist/pokemonlist.jsx
import { useState } from "react";
import pokemonJSON from "../../data/pokemon.json";

import "./PokemonList.css";
import PokemonItem from "../PokemonItem/PokemonItemo";

function Pokemonlist() {
const [pokemons] = useState(pokemonJSON);
const [filterpokemons, setFilterPokemons] = useState(pokemonJSON);
const handleSearch = (e) => {
    let search = pokemons.filter((item) => {
        return item.name.tolowerCase().includes(e.target.value);
    });

    setFilterPokemons(search);
}

  return (
    <div>
        <input type="text"
        placeholder="cari pokemon..."
        className="search"
        onChange={handleSearch}
         />
      <div className="list-pokemon">
    {filterpokemons.length === 0 ? (
        <div>data tidak ditemukan</div>
    ) : (
        filterpokemons.map((item) => (
         <h1>{</h1>
        ))
    )}
      </div>
    </div>
  );
}


export default Pokemonlist;
