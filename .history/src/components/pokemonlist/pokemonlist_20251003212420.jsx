import { useState } from "react";
import pokemonJSON from "../../data/pokemon.json";


import "./PokemonList.css";
import PokemonItem from "../PokemonItem/PokemonItem";



function PokemonList() {
  const [pokemons] = useState(pokemonJSON);
  const [filterPokemons, setFilterPokemons] = useState(pokemonJSON);

  const handleSearch = (e) => {
    let search = pokemons.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value);
    });

    setFilterPokemons(search);
  };

  return (
    
    <div className="background-pokemon"  >
      <div className="menu">
<a className="nav"href="https://www.instagram.com/amrs0_9/">Home</a>
<a className="nav"href="#about">About</a>
      </div>
      <input type="text" placeholder="cari pokemon..." className="search" onChange={handleSearch} />
      <div className="list-pokemon">
        {filterPokemons.length == 0 ? (
          <div>data tidak ditemukan</div>
        ) : (
          filterPokemons.map((item) => (
          <PokemonItem key={item.id} pokemon={item} />
          ))
        )}
        
      </div>
<footer className="footer" id="about">
  <div className="garis"></div>
<div >
  ini adalah web list pokemon ini adalah web gabut untuk tugas
  programing <span>(AMMAR)</span> d
</div>
    </footer>
</div>

  );
}

export default PokemonList;