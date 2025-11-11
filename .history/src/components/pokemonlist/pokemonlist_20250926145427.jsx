import { useState } from "react";
import pokemonJSON from "../../data/pokemon.json";

import "./pokemonlist.css";
import PokemonItem from "../pokemonItem/pokemonItem";

function PokemonList() {
  const [pokemons] = useState(pokemonJSON);

  return (
    <div>
      <div className="list-pokemon">
        {pokemons.map((item) => (
          <PokemonItem 
            key={item.id}
            pokemon={item}
          />
        ))}
      </div>
    </div>
  );
}

export default PokemonList;
