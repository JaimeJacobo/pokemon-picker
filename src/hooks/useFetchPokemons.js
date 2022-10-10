import { useEffect, useState } from 'react'
import pokemonList from '../components/data/pokemonList.json'

export function useFetchPokemons() {
  const [pokemons, setPokemons] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const responses = await Promise.all(
        pokemonList.pokemons.map(async (pokemon) => {
          const pokemonApiData = await (
            await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          ).json()
          return { ...pokemonApiData, generation: pokemon.generation }
        })
      )
      setPokemons(responses)
    }

    fetchData()
  }, [])

  return pokemons
}
