import { useState } from "react";
import pokemonJSON from "../../data/pokemon.json";

import "./pokemonlist.css";
import pokemonitem from "../pokemonitem/pokemonitem";


function Pokemonlist(){
    const [pokemons] = useState(pokemonJSON);
    
// @@ -10,7 +11,10 @@ function pokemonlist() {
<div>
<div className="list-pokemon">
    {pokemons.map((item) => (
<h1>{item.name}</h1>
<pokemonitem 
key=(item.id)
pokemon={item}


    ))}

</div>

</div>
}

export default Pokemonlist;

