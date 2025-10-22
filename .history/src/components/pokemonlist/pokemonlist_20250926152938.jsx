// src/components/pokemonlist/pokemonlist.jsx
import { useState } from "react";
import pokemonJSON from "../../data/pokemon.json";

import "./pokemonlist.css";
import PokemonItem from "../pokemonitem/pokemonitem";

function Pokemonlist() {
  const [pokemons] = useState(pokemonJSON);

  return (
    <div>
        <input type="text"
        p />
      <div className="list-pokemon">
        {pokemons.map((item) => (
          <Pokemonitem key={item.id} pokemon={item} />
        ))}
      </div>
    </div>
  );
}

export default Pokemonlist;
