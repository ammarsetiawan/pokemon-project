import "./PokemonItem.css";

function PokemonItem({ pokemon }) {
return(
    <div className="pokemon-card">
        <img src={pokemon.imageUrl} alt={pokemon.name} width={250} />
        <h1>{pokemon.name}</h1>
        <p className="description">{pokemon.description}</p>
    </div>
    );
}

e