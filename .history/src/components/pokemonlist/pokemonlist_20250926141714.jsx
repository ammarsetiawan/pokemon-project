import { useState } from "react";
import pokemonJSON from "../../data/pokemon.json";

import "./pokemonlist.css";
import pokemonitem from "../pokemonitem/pokemonitem";


function Pokemonlist(){
    const [pokemons] = useState(pokemonJSON);
    
// @@ -10,7 +11,10 @@ function pokemonlist() {
<div>
<div >

</div>

</div>
}

export default Pokemonlist;

