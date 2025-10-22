import "./PokemonItem.css";
import { colours } from "../../data/colours";


function PokemonItem({ pokemon }) {
  return (
    <div
      className="pokemon-card"
      >
        
        <div 
        style={{
        backgroundColor: `${pokemon.color}`,
      }}
    >
      <img  src={pokemon.imageUrl} alt={pokemon.name} width={250} />
    <a href={pokemon.url_pokemon}>
      
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
        </a>
    </div>
        </div>
  );
}

export default PokemonItem;