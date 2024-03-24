import { useContext } from "react"
import GrandsonComponent from "./GrandsonComponent"
import PokemonContext from "./PokemonContext"
import PokeImage from "./PokeImage"

function SonComponent() {
	const { baseUrl, index, suffix } = useContext(PokemonContext)

	return (
		<>
			<h3>Son</h3>
			<PokeImage baseUrl={baseUrl} index={index + 1} suffix={suffix} />
			<GrandsonComponent />
		</>
	)
}

export default SonComponent
