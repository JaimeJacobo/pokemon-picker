
import { useFetchPokemons } from '../hooks/useFetchPokemons'

const PokemonPicker = () => {
  const pokemons = useFetchPokemons()

  console.log(pokemons)

  return (
    <div className="PokemonPicker">
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
      <label htmlFor="vehicle1"> I have a bike</label>
      <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
      <label for="vehicle2"> I have a car</label>
      <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
      <label for="vehicle3"> I have a boat</label>
      {pokemons?.map((pokemon) => {
        return (
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            key={pokemon.id}
          ></img>
        )
      })}
    </div>
  )
}

export default PokemonPicker
