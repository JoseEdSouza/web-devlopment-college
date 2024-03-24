import { useContext } from "react"
import ColorTheme from "./MyColorContext"

const FunctionContextD = () => {
    const value = useContext(ColorTheme)
	return (
		<div>
			<h2 style={{ backgroundColor: value.bkgD }}>FunctionContext D</h2>
		</div>
	)
}

export default FunctionContextD
