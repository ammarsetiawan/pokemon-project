import "./PokemonItem.css";

function PokemonItem({ pokemon }) {
return(
    <div className="pokemon-card">
        <img src={pokemon.imageUrl} alt={pokemon} />

    </div>
)

}