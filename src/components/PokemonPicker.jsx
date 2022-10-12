import pokemonList from './data/pokemonList.json'

import { useState, useEffect } from 'react'
import { useFetchPokemons } from '../hooks/useFetchPokemons'

const PokemonPicker = () => {
  const [versions, setVersions] = useState([])
  const [selectedVersions, setSelectedVersions] = useState([])

  useEffect(() => {
    const versions = []
    for (let i = 1; i <= pokemonList.totalGenerations; i++) {
      versions.push({ version: i, show: true })
    }
    setVersions(versions)
  }, [])

  const pokemons = useFetchPokemons()

  const handleInputChange = (e) => {
    setSelectedVersions((prev) => {
      return [...prev, e.target.value]
    })
  }

  const renderPokemons = () => {
    return pokemons?.map((pokemon) => {
      return (
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          key={pokemon.id}
        ></img>
      )
    })
  }

  return (
    <div className="PokemonPicker">
      {versions?.map((generation) => {
        return (
          <div key={generation.version}>
            <input
              id={generation.version}
              type="checkbox"
              value={generation.version}
              defaultChecked={true}
              onChange={(e)=>handleInputChange(e)}
            />
            <label htmlFor={generation.version}>
              Generation {generation.version}
            </label>
          </div>
        )
      })}
      {renderPokemons()}
    </div>
  )
}

export default PokemonPicker
