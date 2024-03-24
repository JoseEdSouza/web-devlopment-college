import LineWrapper from "./components/LineWrapper"
import ClassA from "./components/q1/ClassContext"
import FunctionContextA from "./components/q1/FunctionContextA"
import GrandfatherComponent from "./components/q2_q3/GrandfatherComponent"

function App() {
	return (
		<div>
			<LineWrapper>
				<h2>Q1</h2>
				<FunctionContextA />
				<ClassA />
			</LineWrapper>
			<LineWrapper>
				<h2>Q2 & Q3</h2>
				<GrandfatherComponent />
			</LineWrapper>
		</div>
	)
}

export default App
