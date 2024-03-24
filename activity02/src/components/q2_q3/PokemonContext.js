import { createContext } from "react"

const PokemonContext = createContext({
	index: 1,
	baseUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
    suffix: ".png"
})

export default PokemonContext
