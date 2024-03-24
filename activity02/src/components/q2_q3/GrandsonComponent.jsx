import { useContext } from "react"
import PokemonContext from "./PokemonContext"
import PokeImage from "./PokeImage"

function GrandsonComponent() {
	const { baseUrl, index, suffix } = useContext(PokemonContext)

	return (
		<>
			<h3>Grandson</h3>
			<PokeImage baseUrl={baseUrl} index={index + 2} suffix={suffix} />
		</>
	)
}

export default GrandsonComponent
