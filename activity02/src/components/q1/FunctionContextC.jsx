import ColorTheme from "./MyColorContext"
import FunctionContextD from "./FunctionContextD"
import { useContext } from "react"

const FunctionContextC = () => {
    const value = useContext(ColorTheme)
	return (
		<div>
			<h2 style={{ backgroundColor: value.bkgC }}>FunctionContext C</h2>
			<FunctionContextD />
		</div>
	)
}

export default FunctionContextC
