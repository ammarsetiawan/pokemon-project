import "./PokemonItem.css";
import { colours } from "../../data/colours";


function PokemonItem({ pokemon }) {
  return (

    <div 
      onClick={pokem}
        className="pokemon-card"
        style={{
        backgroundColor: `${pokemon.color}`,
      }}
    >
      <img className="img" src={pokemon.imageUrl} alt={pokemon.name}  />
      
      <h1>{pokemon.name}</h1>
      <div className="types-container">
        {pokemon.types.map((item, index) => (
          <span
          key={index}
          className="type-badge"
          style={
            {
              backgroundColor: colours[item.toLowerCase()],
            }
          }
          >
            {item}
          </span>
        ))}
      </div>
            <a className="link" href={pokemon.url_pokemon}>
      <p className="description">{pokemon.description}</p>
        </a>
    </div>
        
  );
}

export default PokemonItem;