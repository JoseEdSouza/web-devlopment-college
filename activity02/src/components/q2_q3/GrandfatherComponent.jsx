import SonComponent from "./SonComponent"
import PokemonContext from "./PokemonContext"
import { useContext, useState } from "react"
import PokeImage from "./PokeImage"
import Button from "./Button"

function GrandfatherComponent() {
	const [index, setIndex] = useState(1)
	const context = {
		index: index,
		baseUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
		suffix: ".png",
	}

	const pokeContext = useContext(PokemonContext)

	return (
		<>
			<PokemonContext.Provider value={context}>
				<Button onClick={() => setIndex(index + 1)} label="Increment" />
				<Button onClick={() => setIndex(Math.abs(index - 1))} label="Decrement" />
				<h3>Grandfather</h3>
				<PokeImage baseUrl={pokeContext.baseUrl} index={index} suffix={pokeContext.suffix} />
				<SonComponent />
			</PokemonContext.Provider>
		</>
	)
}

export default GrandfatherComponent
