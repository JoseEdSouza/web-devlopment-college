function Motherboard({name,price}) {
  return (
    <div>
      <h2>Motherboard</h2>
        <p>Name: {name}</p>
        <p>Price: {price}</p>
    </div>
  )
}

function Memory({name,price}) {
  return (
    <div>
      <h2>Memory</h2>
        <p>Name: {name}</p>
        <p>Price: {price}</p>
    </div>
  )
}

function GraphicsCard({name,price}) {
  return (
    <div>
      <h2>GraphicsCard</h2>
        <p>Name: {name}</p>
        <p>Price: {price}</p>
    </div>
  )
}

export {Motherboard, Memory, GraphicsCard}