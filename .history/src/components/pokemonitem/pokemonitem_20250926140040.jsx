import "./pokemonitem.css";

function Pokemonitem({ pokemon }){
    return(

        <div className="pokemon-card">
<div
className="pokemon-card"
style={{ backgroundColor: ${pokemon.color}`` }}

/>





<img src="{pokemon.imageUrl}" alt="{pokemon.name}" width={250} />
    <h1>{pokemon.name}</h1>
<p className="description">{pokemon.description}</p>
        </div>
    )
}

export default Pokemonitem;