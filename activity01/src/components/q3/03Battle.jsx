import React from "react"

function Hero({ name, imgUrl, Arena }) {
	return (
		<div>
			<h3>{name}</h3>
			<img src={imgUrl} alt={name} style={{ width: 100, height: 100 }} />
			<h4>Arena: {Arena}</h4>
		</div>
	)
}

function Enemy({ name, imgUrl, Arena }) {
	return (
		<div>
			<h3>{name}</h3>
			<img src={imgUrl} alt={name} style={{ width: 100, height: 100 }} />
			<h4>Arena: {Arena}</h4>
		</div>
	)
}

function Arena({ Arena, children }) {
	return (
		<div>
			<h3>Arena: {Arena}</h3>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				{React.Children.map(children, (x) => React.cloneElement(x, { ...x.props, Arena }))}
			</div>
		</div>
	)
}

function World() {
	return (
		<div>
			<h2>World</h2>
			<Arena Arena="Arena 1">
				<Hero name="Baki" imgUrl="https://scc10.com.br/wp-content/uploads/2022/05/Baki-campeao-850x560-1.jpg" />
				<Enemy name="Yujiro" imgUrl="https://pm1.aminoapps.com/8200/56b06462c60316744a5263c21c53c11a9041073cr1-736-675v2_hq.jpg" />
			</Arena>
			<Arena Arena="Arena 2">
				<Hero
					name="Superman"
					imgUrl="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/12/221024162135-man-of-steel-cavill.jpg?w=1200&h=900&crop=1"
				/>
				<Enemy
					name="Batman"
					imgUrl="https://midias.correiobraziliense.com.br/_midias/jpg/2023/08/21/1200x801/1_o_batman_easy_resize_com_-29069579.jpg?20230821092600?20230821092600"
				/>
			</Arena>
			<Arena Arena="Arena 3">
				<Hero name="Goku" imgUrl="https://coisasdojapao.com/wp-content/uploads/2023/05/goku-dragon-ball-curiosidades-0.webp" />
				<Enemy name="Vegeta" imgUrl="https://i.ytimg.com/vi/K0lZGROux5k/maxresdefault.jpg" />
			</Arena>
		</div>
	)
}

export default World

export { Hero, Enemy, Arena }
