// src/components/pokemonlist/pokemonlist.jsx
import { useState } from "react";
import pokemonJSON from "../../data/pokemon.json";

import "./pokemonlist.css";
import PokemonItem from "../pokemonitem/pokemonitem";

function Pokemonlist() {
const [pokemons] = useState(pokemonJSON);
const [filterokemons, setFilterPokemons] = useState(pokemonJSON);
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
            <Pokemonitem key={item.id} pokemon={item} />
        ))
    )}
      </div>
    </div>
  );
}


export default Pokemonlist;
