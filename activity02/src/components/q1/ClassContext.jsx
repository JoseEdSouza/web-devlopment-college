import React from "react"
import ColorTheme from "./MyColorContext"

class ClassA extends React.Component {
	cores = { bkgA: "pink", bkgB: "purple", bkgC: "aqua", bkgD: "gray" }
	render() {
		return (
			<ColorTheme.Provider value={this.cores}>
				<ClassB />
				<ClassC />
			</ColorTheme.Provider>
		)
	}
}

class ClassB extends React.Component {
	render() {
		let value = this.context
		return (
			<div>
				<h2 style={{ backgroundColor: value.bkgB }}>ClassContext B</h2>
			</div>
		)
	}
}

class ClassC extends React.Component {
	render() {
		return (
			<>
				<ColorTheme.Consumer>
					{(value) => (
						<div>
							<h2 style={{ backgroundColor: value.bkgC }}>ClassContext C</h2>
						</div>
					)}
				</ColorTheme.Consumer>
			</>
		)
	}
}

ClassB.contextType = ColorTheme

export default ClassA
