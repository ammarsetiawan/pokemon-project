import "./PokemonItem.css";
import { colours } from "../../data/colours";
import pokemonJSON from "../../data/pokemon.json";

function PokemonItem({ pokemon }) {
  return (
    <div href="{pokemon.name}      className="pokemon-card"
      style={{
        backgroundColor: `${pokemon.color}`,
      }}
    >
      <img  src={pokemon.imageUrl} alt={pokemon.name} width={250} />
      <a href={pokemon}></a>
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