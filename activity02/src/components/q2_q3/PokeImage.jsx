function PokeImage({ index, baseUrl, suffix }) {
	const imgStyle = {
		width: "200px",
		height: "200px",
	}

	return <img style={imgStyle} src={`${baseUrl}/${index}${suffix}`} alt="Pokemon" />
}

export default PokeImage
