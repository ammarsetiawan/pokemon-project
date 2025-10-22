import PokemonItem from "../PokemonItem/PokemonItem";

import PokemonList from "./components/PokemonList/PokemonList";

function App() {
  return (
    < PokemonList ><PokemonList></PokemonList>

   <PokemonItem key={item.id} pokemon={item} />
  );
}


export default App;
