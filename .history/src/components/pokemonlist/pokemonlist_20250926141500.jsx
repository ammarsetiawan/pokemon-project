import { useState } from "react";
import pokemonJSON from "../../data/"


function Pokemonlist(){
    const [pokemons] = useState(pokemonjson);
    
// @@ -10,7 +11,10 @@ function pokemonlist() {


    
    return (
        <div>
<div className='list-pokemon'>
    {pokemons.map((item) => (
        <h1>{item.name}</h1>
        <Pokemonitem
        key={item.id}
        pokemon={item}
        />
    ))}
    </div>
    </div>
    );
}

export default Pokemonlist;

