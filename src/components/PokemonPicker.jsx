import { useFetchPokemons } from '../hooks/useFetchPokemons'

const PokemonPicker = () => {
  const pokemons = useFetchPokemons()
  return (
    <div className="PokemonPicker">
      <input
        type="checkbox"
        name="vehicle1"
        value="Bike"
        // onChange={(e) => console.log(e.target.checked)}
      />
      <label htmlFor="vehicle1"> Generation 1</label>
      <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
      <label htmlFor="vehicle2"> Generation 2</label>
      <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
      <label htmlFor="vehicle3"> Generation 3</label>
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
