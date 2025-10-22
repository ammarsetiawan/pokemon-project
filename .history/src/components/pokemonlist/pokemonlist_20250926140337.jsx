import pokemonjson from '../../pokemon.json'
import Pokemonitem from '../pokemonitem/pokemonitem';

import "./pokemonlist.css"
import pokemonitem from '../pokemonitem/pokemonitem';

function Pokemonlist(){
    const [pokemons] = useState(pokemonjson);
    
@@at 6,7 +6,8 @
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

