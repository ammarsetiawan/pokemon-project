import pokemonjson from '../../pokemon.json'

import "./pokemonlist.css"

function Pokemonlist(){
    const [pokemons] = useState(pokemonjson);

return (
    <div>
<div className='list-pokemon'>
    {pokemons.map((item) => (
        <h1>{item.name}</h1>
    ))}
    </div>
    </div>
)
}
export default Pokemonlist;
