import "./PokemonItem.css";
import { colours } from "../../data/colours";


function PokemonItem({ pokemon }) {
  return (
    <div 
    className="pokemon-card"
    style={{
      backgroundColor: `${pokemon.color}`,
    }}
    >
    <a href="https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/1.webp">\</a>
      <img  src={pokemon.imageUrl} alt={pokemon.name} width={250} />
      
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