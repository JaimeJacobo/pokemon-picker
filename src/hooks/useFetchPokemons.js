import { useEffect, useState } from 'react'
import pokemonList from '../components/data/pokemonList.json'

export function useFetchPokemons() {
  const [pokemons, setPokemons] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const pokemonPromises = pokemonList.pokemons.map(async (pokemon) => {
        return await (
          await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        ).json()
      })
      await Promise.all(pokemonPromises)
        .then((fullfilledPromises) => {
          setPokemons(fullfilledPromises)
        })
        .catch((err) => {
          return err
        })
    }

    fetchData()
  }, [])

  return pokemons
}
