import Line from "./Line"

function LineWrapper({ children }) {
	return (
		<div style={{ marginTop: "20px" }}>
			<Line />
			{children}
			<Line />
		</div>
	)
}

export default LineWrapper