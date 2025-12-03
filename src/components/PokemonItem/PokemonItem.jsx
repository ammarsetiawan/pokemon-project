import "./PokemonItem.css";
import { colours } from "../../data/colours";


function PokemonItem({ pokemon }) {
  return (

    <div 
      href={pokemon.url_pokemon   }
      onClick={pokemon.url_pokemon}
        className="pokemon-card"
        style={{
        backgroundColor: `${pokemon.color}`,
      }}
    >
            <a className="link" href={pokemon.url_pokemon}>
      <img className="img" src={pokemon.imageUrl} alt={pokemon.name}  />
        </a>
      
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
      <p className="description">{pokemon.description}</p>
    </div>
        
  );
}

export default PokemonItem;
