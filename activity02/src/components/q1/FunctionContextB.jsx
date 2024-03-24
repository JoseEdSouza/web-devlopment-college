import { useContext } from "react"
import ColorTheme from "./MyColorContext"

const FunctionContextB = () => {
	const value = useContext(ColorTheme)
	return (
		<div>
			<h2 style={{ backgroundColor: value.bkgB }}>FunctionContext B</h2>
		</div>
	)
}

export default FunctionContextB
